import { json, Op } from 'sequelize'
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
    async getMovie(id) {
        return await Movie.findByPk(id)
    }
    async createMovie(object) {
        const { title } = object
        const [movie, created] = await Movie.findOrCreate({
            where: { title },
            default: object
        })
        if (created) {
            return movie
        } else {
            return json('the movie already exists')
        }
    }
    async updateMovie(id, object) {
        await Movie.update(object, {
            where: id
        })
        return Movie.findOne({
            where: id
        })
    }
    async deleteMovie(id) {
        const exist = await Movie.findOne({ where: id })
        if (exist) {
            Movie.destroy({ where: id })
            return json('Movie deleted')
        } else {
            return json(`the id does not exist`)
        }
    }
}

export default movieService
