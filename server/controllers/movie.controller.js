import Movie from '../models/movie.model.js'

export const createMovie = async (req, res) => {
    try {
        //await Movie.sync({ force: true })
        const { picture, title, calification } = req.body
        const newMovie = new Movie({ picture, title, calification })
        await newMovie.save()
        return res.send(newMovie)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
