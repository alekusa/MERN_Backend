import User from '../models/user.model.js'
import Role from '../models/role.model.js'
import servCript from './cript.js'
const serv = new servCript()

import jwt from 'jsonwebtoken'

class authService {
    //* function para logeo y generar token.! //
    async mathpassword(bodyPass, bodyEmail) {
        const user = await User.findOne({
            where: { email: bodyEmail }
        })
        const compare = await serv.comparePassword(bodyPass, user.password)
        if (compare) {
            const token = jwt.sign({ id: user.id }, 'palabraSecreta', {
                expiresIn: 86400
            })
            return { token }
        } else {
            return { Password: 'Password Incorrect', token: 'Null' }
        }
    }

    //* function para crear usuarios nuevos ! //
    async newUsers(object) {
        const { username, email, password, role } = object
        const existEmail = await User.findOne({ where: { email } })
        if (!existEmail) {
            const passCrypt = await serv.encryptPassword(password)
            const newUser = User.build({
                username,
                email,
                password: passCrypt
            })
            if (role) {
                const idRole = await Role.findOne({ where: { name: role } })
                if (idRole) {
                    newUser.role = idRole.id
                    await newUser.save()
                } else {
                    newUser.role = 1
                    newUser.save()
                }
            } else {
                newUser.role = 1
                newUser.save()
            }
            const token = jwt.sign({ id: newUser.id }, 'palabraSecreta', {
                expiresIn: 86400 //*24hs
            })
            return { token }
        } else {
            return { Email: 'this email already exists' }
        }
    }
}
export default authService
