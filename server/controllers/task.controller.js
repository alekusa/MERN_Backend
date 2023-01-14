import TaskService from '../services/task.service.js'
const serv = new TaskService()

export const getTasks = async (req, res) => {
    try {
        res.status(200).json(await serv.getTasks())
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createTask = async (req, res) => {
    try {
        res.json(await serv.createTask(req.body))
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteTask = async (req, res) => {
    try {
        res.status(200).json(await serv.deleteTask(req.params))
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getTask = async (req, res) => {
    try {
        return res.status(200).json(await serv.getTask(req.params))
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTask = async (req, res) => {
    try {
        return res.status(200).json(await serv.updateTask(req.params, req.body))
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
