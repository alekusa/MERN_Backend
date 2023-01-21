import { Router } from 'express'
import { editUser, getUsers } from '../controllers/user.controller.js'
const router = Router()

router.get('/user', getUsers)
router.put('/user/:id', editUser)

export default router
