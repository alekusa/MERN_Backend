import { json, Op } from 'sequelize'
import Movie from '../models/movie.model.js'
import Genre from '../models/genre.model.js'

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
        const { genre } = object
        const newMovie = Movie.build(object)
        if (object.genre) {
            const ojectGenre = await Genre.findOne({ where: { name: genre } })
            if (ojectGenre) {
                const idGnre = ojectGenre.id
                newMovie.genre = idGnre
                newMovie.save()
                return newMovie
            } else {
                return 'el genero no existe'
            }
        } else {
            const idGenre = 1
            newMovie.genre = idGenre
            newMovie.save()
            return newMovie
        }
    }
    async updateMovie(id, object) {
        const existeMovie = await Movie.findByPk(id.id)
        if (existeMovie) {
            await Movie.update(object, {
                where: id
            })
            return Movie.findOne({
                where: id
            })
        } else {
            return { message: 'the movie does not exist' }
        }
    }
    async deleteMovie(id) {
        const exist = await Movie.findOne({ where: id })
        if (exist) {
            Movie.destroy({ where: id })
            return json(`Movie ( ${exist.title} ) deleted`)
        } else {
            return json(`the id does not exist`)
        }
    }
}

export default movieService
