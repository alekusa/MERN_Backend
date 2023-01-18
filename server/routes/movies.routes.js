import { Router } from 'express'
import {
    createMovie,
    deleteMovie,
    editMovie,
    getMovie,
    getMovies
} from '../controllers/movie.controller.js'
const router = Router()
import { verifyToken } from '../middlewares/index.js'

router.get('/movie', getMovies)
router.post('/movie', verifyToken, createMovie)
router.put('/movie/:id', editMovie)
router.get('/movie/:id', getMovie)
router.delete('/movie/:id', deleteMovie)

export default router
