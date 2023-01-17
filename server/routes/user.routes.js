import { Router } from 'express'
import {
    deleteUsers,
    getUsers,
    setUsers
} from '../controllers/user.controller.js'
const router = Router()

router.get('/Usuarios', getUsers)
router.get('/setuser', setUsers)
router.get('/deletuser', deleteUsers)

export default router
