//import model
import post_sqlite_Serv from '../services/post_sqlite.service.js'
const serv = new post_sqlite_Serv()

export const createPost_sqlite = async (req, res) => {
    try {
        res.status(200).json(await serv.create_PostSqlite(req.body))
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const getPost_sqlite = async (req, res) => {
    try {
        res.status(200).json(await serv.getPost_sqlite())
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
