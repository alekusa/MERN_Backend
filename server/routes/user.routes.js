import { Router } from 'express'
import {
    addUser,
    deleteUser,
    editUser,
    getUsers,
    getUser
} from '../controllers/user.controller.js'
const router = Router()
import { editUser, getUsers, newUser } from '../controllers/user.controller.js'

router.get('/user', getUsers)
router.get('/user/:id', getUser)
router.put('/user/:id', editUser)
router.post('/user', addUser)
router.delete('/user/:id', deleteUser)

export default router
