import Role from '../models/role.model.js'
import User from '../models/user.model.js'
import servCript from '../services/cript.js'
const servC = new servCript()

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
export const addUser = async (req, res) => {
    const { username, email, password, role } = req.body
    const passcrypto = await servC.encryptPassword(password)
    const emailExist = await User.findOne({ where: { email } })
    if (!emailExist) {
        try {
            const newUser = User.build({
                username,
                email,
                password: passcrypto
            })
            if (role) {
                const datoRole = await Role.findOne({ where: { name: role } })
                newUser.role = datoRole.id
                newUser.save()
                res.status(200).json(newUser)
                return
            } else {
                newUser.role = 1
                newUser.save()
                res.status(200).json(newUser)
                return
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    } else {
        res.status(200).json({ Email: 'this email already exists' })
    }
}
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({ where: req.params })
        res.status(500).json('User Deleted')
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}
export const getUser = async (req, res) => {
    try {
        res.status(200).json(await User.findByPk(req.params.id))
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}
