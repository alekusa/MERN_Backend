import { json } from 'sequelize'
import { Task } from '../models/Task.model.js'

class TaskService {
    async createTask(object) {
        const { name } = object
        const [tas, created] = await Task.findOrCreate({
            where: { name },
            defaults: object
        })
        if (created) {
            return tas
        } else {
            return json('ya existe la task')
        }
    }
    //! Implementar query de busqueda para las task
    async getTasks() {
        return await Task.findAll()
    }
    async getTask(id) {
        const result = await Task.findByPk(id.id)
        if (!result) {
            return json({ message: 'NO existe tarea' })
        } else {
            return result
        }
    }
    async updateTask(id, object) {
        await Task.update(object, {
            where: id
        })
        return Task.findByPk(id.id)
    }
    async deleteTask(id) {
        await Task.destroy({ where: id })
        return json({ message: 'Task Deleted' })
    }
}

export default TaskService
