import Movie from '../models/movie.model.js'

class movieService {
    async getAllMovies(query) {
        const { name } = query
        let queryToFind = {}
        if (name) {
            queryToFind.title = name
        }
        console.log(queryToFind)
        return await Movie.findAll({
            where: queryToFind
        })
    }
}

export default movieService
