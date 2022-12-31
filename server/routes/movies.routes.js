import { Router } from 'express'
import {
    createMovie,
    deleteMovie,
    editMovie,
    getMovie,
    getMovies
} from '../controllers/movie.controller.js'
const router = Router()

router.get('/movie', getMovies)
router.post('/movie', createMovie)
router.put('/movie/:id', editMovie)
router.get('/movie/:id', getMovie)
router.delete('/movie/:id', deleteMovie)

export default router
