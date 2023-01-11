import { Router } from 'express'
import {
    createPost_sqlite,
    getPost_sqlite
} from '../controllers/post_sqlite.controller.js'
const route = Router()

route.get('/post_sqlite', getPost_sqlite)

route.post('/post_sqlite', createPost_sqlite)

route.put('/post_sqlite/:id', (req, res) => {
    res.send('[put] posts Sqlite_seqelize')
})
route.delete('/post_sqlite/:id', (req, res) => {
    res.send('[delete] posts Sqlite_seqelize')
})
route.get('/post_sqlite/:id', (req, res) => {
    res.send('[get:/id] post Sqlite_seqelize')
})

export default route
