// Modelos a utilizar en la creacion de usuarios
//import User from '../models/user.model.js'
//import Role from '../models/role.model.js'
// para generar un token
//import jwt from 'jsonwebtoken'
// class donde estan las funciones para encriptar las password
//import servCript from '../services/cript.js'
//const serv = new servCript()
//* Cargando auth.service.js
import authService from '../services/auth.service.js'
const autServ = new authService()

export const signUp = async (req, res) => {
    try {
        res.status(200).json(await autServ.newUsers(req.body))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    // const { username, email, password, role } = req.body
    // const encriptada = await serv.encryptPassword(password)

    // const newUser = User.build({
    //     username,
    //     email,
    //     password: encriptada
    // })
    // if (role) {
    //     //* si encuentra el nombre pasado por req.body.role en la tabla Role, asigna su id a roleId,
    //     //* si mandan cualquier role que no esta en la tabla se asigna el 1 que es Users
    //     const roleId = await Role.findOne({ where: { name: role } })
    //     if (roleId) {
    //         newUser.role = roleId.id
    //         await newUser.save()
    //     } else {
    //         newUser.role = 1
    //         await newUser.save()
    //     }
    // } else {
    //     //* si no se asigna nada tambien le asignamos el 1 que es Users
    //     newUser.role = 1
    //     await newUser.save()
    // }
    // const token = jwt.sign({ id: newUser.id }, 'palabraSecreta', {
    //     expiresIn: 86400 //*24hs
    // })
    // res.json({ token, newUser })
}
export const signIn = async (req, res) => {
    try {
        res.status(200).json(
            await autServ.mathpassword(req.body.password, req.body.email)
        )
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
