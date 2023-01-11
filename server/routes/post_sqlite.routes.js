import { Router } from 'express'
import {
    createPost_sqlite,
    deletePost_sqlite,
    getPosts_sqlite,
    getPost_sqlite,
    updatePost_sqlite
} from '../controllers/post_sqlite.controller.js'
const route = Router()

route.get('/post_sqlite', getPosts_sqlite)

route.post('/post_sqlite', createPost_sqlite)

route.put('/post_sqlite/:id', updatePost_sqlite)
route.delete('/post_sqlite/:id', deletePost_sqlite)
route.get('/post_sqlite/:id', getPost_sqlite)

export default route
