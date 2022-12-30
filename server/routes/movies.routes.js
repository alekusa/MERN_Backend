import { Router } from 'express'
import { createMovie } from '../controllers/movie.controller.js'
const router = Router()

router.post('/movie', createMovie)

export default router
