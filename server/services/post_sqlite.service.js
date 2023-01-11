import { json, where } from 'sequelize'
import Post_sqlite from '../models/post.sequelize.js'
//correjir que solo genera un dato con titulo sin descripcion ni imagen
class post_sqlite_Serv {
    async create_PostSqlite(object) {
        //console.log(object)
        const { title } = object
        const [post, created] = await Post_sqlite.findOrCreate({
            where: { title },
            defaults: object
        })
        if (created) {
            return post
        } else {
            return json('the Post already exists')
        }
    }
    async getPosts_sqlite() {
        return await Post_sqlite.findAll()
    }
    async deletePost_sqlite(id) {
        //console.log(id.id)
        const exist = await Post_sqlite.findOne({ where: id })
        if (exist) {
            await Post_sqlite.destroy({ where: id })
            return json('deleted post the id: ' + id.id)
        } else {
            return json('the id: ' + id.id + ' does not exist')
        }
    }
    async getPost_sqlite(id) {
        const exist = await Post_sqlite.findOne({ where: id })
        if (exist) {
            return json(await Post_sqlite.findOne({ where: id }))
        } else {
            return json('the id ' + id.id + ' does not exist!')
        }
    }
    //se podria ver de que si el titulo esta creado no se repita titulo en la actualizacion
    async updatePost_sqlite(id, object) {
        const exist = await Post_sqlite.findOne({ where: id })
        if (exist) {
            await Post_sqlite.update(object, { where: id })
            return await Post_sqlite.findOne({ where: id })
        } else {
            return json('el id ' + id.id + ' does not exist !')
        }
    }
}

export default post_sqlite_Serv
