import Role from '../models/role.model.js'
import User from '../models/user.model.js'
import authService from '../services/auth.service.js'
const servAuth = new authService()

export const getUsers = async (req, res) => {
    try {
        res.status(200).json(await User.findAll())
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const editUser = async (req, res) => {
    const id = req.params
    const { username, email, role } = req.body
    try {
        const data = {
            username,
            email
        }
        if (role) {
            const findrole = await Role.findOne({ where: { name: role } })
            data.role = findrole.id
            await User.update(data, { where: id })
            res.status(200).json('User Update')
            return
        }
        await User.update(data, { where: id })
        res.status(200).json('User Update')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const newUser = async (req, res) => {
    try {
        await servAuth.newUsers(req.body)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
