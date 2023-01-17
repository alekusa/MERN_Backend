import { Router } from 'express'
const router = Router()
// importando los controladores de post's
import {
    getPosts,
    createPost,
    deletePost,
    updatePost,
    getPost
} from '../controllers/posts.controller.js'

router.get('/posts', getPosts)
router.post('/posts', createPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)
router.get('/posts/:id', getPost)

export default router
