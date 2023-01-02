import Movie from '../models/movie.model.js'
import movieService from '../services/movie.service.js'
const serv = new movieService()
//crear una
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
//mostrar todas
export const getMovies = async (req, res) => {
    try {
        return res.status(200).json(await serv.getAllMovies(req.query))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
//editar una
export const editMovie = async (req, res) => {
    const { id } = req.params
    const { picture, title, calification } = req.body
    try {
        await Movie.update(
            { picture, title, calification },
            {
                where: {
                    id
                }
            }
        )
        const edit = await Movie.findByPk(id)
        res.json(edit)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
//mostrar una
export const getMovie = async (req, res) => {
    const { id } = req.params
    try {
        const movie = await Movie.findByPk(id)
        res.json(movie)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
//eliminar una
export const deleteMovie = async (req, res) => {
    const { id } = req.params
    try {
        const { movieDelete } = await Movie.destroy({ where: { id } })
        res.status(200).json({ message: 'Movie deleted' })
    } catch (error) {}
}
