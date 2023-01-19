import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import Role from '../models/role.model.js'

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']

        if (!token)
            return res.status(403).json({ message: 'no token provider' })
        //* Agregar 'palabraSecreta' //config.SECRET desde archivo con clave .ENV desde archivo config.js
        const decoder = jwt.verify(token, 'palabraSecreta')
        req.userId = decoder.id //jwt.verify(token, 'palabraSecrete')
        const user = await User.findByPk(req.userId)
        if (!user) return res.status(404).json({ message: 'no user found' })
        next()
    } catch (error) {
        res.status(401).json({ message: 'Unautorized' })
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.userId)
        const role = await Role.findOne({ where: { id: user.role } })
        if (role.name === 'Admin') {
            next()
            return
        } else {
            res.status(200).json({
                Error: `the user ${role.name}, does not have permissions`
            })
            return
        }
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}
