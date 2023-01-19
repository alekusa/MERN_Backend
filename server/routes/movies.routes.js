import { Router } from 'express'
import {
    createMovie,
    deleteMovie,
    editMovie,
    getMovie,
    getMovies
} from '../controllers/movie.controller.js'
const router = Router()
import { authjwt } from '../middlewares/index.js'

router.get('/movie', getMovies)
router.post('/movie', [authjwt.verifyToken, authjwt.isAdmin], createMovie)
router.put('/movie/:id', authjwt.verifyToken, editMovie)
router.get('/movie/:id', getMovie)
router.delete('/movie/:id', [authjwt.verifyToken, authjwt.isAdmin], deleteMovie)

export default router
