// Modelos a utilizar en la creacion de usuarios
import User from '../models/user.model.js'
import Role from '../models/role.model.js'
// para generar un token
import jwt from 'jsonwebtoken'
// class donde estan las funciones para encriptar las password
import servCript from '../services/cript.js'
const serv = new servCript()

export const signUp = async (req, res) => {
    const { username, email, password, role } = req.body
    const encriptada = await serv.encryptPassword(password)

    const newUser = User.build({
        username,
        email,
        password: encriptada
    })
    console.log(role)
    if (role) {
        //* si encuentra el nombre pasado por req.body.role en la tabla Role, asigna su id a roleId,
        //* si mandan cualquier role que no esta en la tabla se asigna el 1 que es Users
        const roleId = await Role.findOne({ where: { name: role } })
        if (roleId) {
            newUser.role = roleId.id
            await newUser.save()
        } else {
            newUser.role = 1
            await newUser.save()
        }
    } else {
        //* si no se asigna nada tambien le asignamos el 1 que es Users
        newUser.role = 1
        await newUser.save()
    }
    const token = jwt.sign({ id: newUser.id }, 'palabraSecreta', {
        expiresIn: 86400 //*24hs
    })
    res.json({ token, newUser })
}
export const signIn = async (req, res) => {
    const user = await User.findOne({
        where: { email: req.body.email }
    })
    //console.log(user.username)
    if (!user) return res.status(400).json({ message: 'User not fund' })

    const mathpassword = await serv.comparePassword(
        req.body.password,
        user.password
    )
    if (!mathpassword) return res.status(401).json({ token: null })
    const token = jwt.sign({ id: user.id }, 'palabraSecreta', {
        expiresIn: 86400
    })
    res.json({ token: token })
}
