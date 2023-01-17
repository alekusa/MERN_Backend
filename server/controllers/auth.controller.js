//* Cargando auth.service.js
import authService from '../services/auth.service.js'
const autServ = new authService()

export const signUp = async (req, res) => {
    try {
        res.status(200).json(await autServ.newUsers(req.body))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
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
