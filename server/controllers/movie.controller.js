import Movie from '../models/movie.model.js'

export const createMovie = async (req, res) => {
    try {
        //await Movie.sync({ force: true })
        const { picture, title, calification } = req.body
        const newMovie = Movie.build({ picture, title, calification })
        await newMovie.save()
        return res.send(newMovie)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll()
        res.send(movies)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
