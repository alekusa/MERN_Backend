import { Op } from 'sequelize'
import Movie from '../models/movie.model.js'

class movieService {
    async getAllMovies(query) {
        const { name, order } = query
        let queryToFind = {}
        let orderby = []
        if (name) {
            queryToFind.title = { [Op.like]: `%${name}%` }
        }

        if (order) {
            if (order === 'DESC' || order === 'desc') {
                orderby.push(['createdAt', 'DESC'])
            } else {
                orderby.push(['createdAt', 'ASC'])
            }
        }
        return await Movie.findAll({
            where: queryToFind,
            order: orderby
        })
    }
}

export default movieService
