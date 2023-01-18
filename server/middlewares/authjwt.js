import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']

        if (!token)
            return res.status(403).json({ message: 'no token provider' })
        //* Agregar 'palabraSecreta' //config.SECRET desde archivo con clave .ENV desde archivo config.js
        const decoder = jwt.verify(token, 'palabraSecreta') //jwt.verify(token, 'palabraSecrete')
        console.log(decoder)
        const user = await User.findByPk(decoder.id)
        if (!user) return res.status(404).json({ message: 'no user found' })
        next()
    } catch (error) {
        res.status(401).json({ message: 'Unautorized' })
    }
}
