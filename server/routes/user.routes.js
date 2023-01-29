import { Router } from 'express'
const router = Router()
import { editUser, getUsers, newUser } from '../controllers/user.controller.js'

router.get('/user', getUsers)
router.put('/user/:id', editUser)
router.post('/user', newUser)

export default router
