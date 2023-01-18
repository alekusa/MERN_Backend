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
router.put('/movie/:id', verifyToken, editMovie)
router.get('/movie/:id', getMovie)
router.delete('/movie/:id', verifyToken, deleteMovie)

export default router
