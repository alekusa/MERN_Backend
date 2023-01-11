import { json } from 'sequelize'
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
    async getPost_sqlite() {
        return await Post_sqlite.findAll()
    }
}

export default post_sqlite_Serv
