import User from '../models/user.model.js'

export const getUsers = async (req, res) => {
    try {
        res.status(200).json(await User.findAll())
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
