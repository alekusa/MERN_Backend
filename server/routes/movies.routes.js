import { Router } from 'express'
import {
    createMovie,
    deleteMovie,
    editMovie,
    getMovie,
    getMovies
} from '../controllers/movie.controller.js'
import { isAdmin, verifyToken } from '../middlewares/authjwt.js'
const router = Router()
//*middleware de proteccion de rutas !
router.get('/movie', verifyToken, getMovies)
router.post(
    '/movie', //! [verifyToken, isAdmin],
    createMovie
)
router.put('/movie/:id', [verifyToken, isAdmin], editMovie)
router.get('/movie/:id', verifyToken, getMovie)
router.delete('/movie/:id', [verifyToken, isAdmin], deleteMovie)

export default router
