import movieService from '../services/movie.service.js'
const serv = new movieService()
//crear una
export const createMovie = async (req, res) => {
    try {
        res.status(200).json(await serv.createMovie(req.body))
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
//mostrar todas
export const getMovies = async (req, res) => {
    try {
        res.status(200).json(await serv.getAllMovies(req.query))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
//editar una
export const editMovie = async (req, res) => {
    try {
        res.status(200).json(await serv.updateMovie(req.params, req.body))
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
//mostrar una
export const getMovie = async (req, res) => {
    try {
        res.status(200).json(await serv.getMovie(req.params.id))
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
//eliminar una
export const deleteMovie = async (req, res) => {
    try {
        res.status(200).json(await serv.deleteMovie(req.params))
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
