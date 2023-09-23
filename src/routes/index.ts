import { Router } from 'express'
import TodoControllers from '../controllers/TodoControllers'

const router = Router()

router.get('/todos', TodoControllers.find) // http://localhost:5000/api/v1/todos
router.get('/todo/:id', TodoControllers.findOne) // http://localhost:5000/api/v1/todo/1
router.post('/todo', TodoControllers.create) // http://localhost:5000/api/v1/todo
router.patch('/todo/:id', TodoControllers.update) // http://localhost:5000/api/v1/todo/1
router.delete('/todo/:id', TodoControllers.delete) // 

export default router