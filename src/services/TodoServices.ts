import { Request, Response } from "express"
import ITodos from "../interface/todos"
import Todos from "../mocks/Todos"

export default new class TodoService {
    private todos: ITodos[]

    constructor() {
        this.todos = [...Todos]
    }

    find(req: Request, res: Response) : Response {
        try {
            return res.status(200).json(this.todos)
        } catch(error) {
            return res.status(500).json({error: 'Internal server error'})
        }
    }

    findOne(req: Request, res: Response) : Response {
        try {
            const id = parseInt(req.params.id);
            const data = Todos.find((data) => data.id === id);

            return res.status(200).json(data);
        } catch(error) {
            return res.status(500).json({error: 'Something error while findOne'})
        }
    }

    create(req: Request, res: Response) : Response {
        try {
            const data: ITodos = req.body
            Todos.push(data)

            return res.status(200).json({ data: Todos });
        } catch(error) {
            return res.status(500).json({error: 'Something wrong while create todo'})
        }
    }

    update(req: Request, res: Response) : Response {
        try {
            const id: number = parseInt(req.params.id)
            const updateTodo: ITodos = req.body

            const index: number = this.todos.findIndex(todo => todo.id === id)

            if(index !== -1) {
                this.todos[index] = {...this.todos[index], ...updateTodo}
                const data = this.todos[index]
                return res.status(200).json(data)
            }

            return res.status(404).json({error: 'ID todo not found'})
        } catch(error) {
            return res.status(500).json({error: 'Something error while update todo'})
        }
    }

    delete(req: Request, res: Response) : Response {
        try {
            const { id } = req.params
            const data: ITodos[] = Todos.filter(todo => todo.id !== parseInt(id))

            return res.status(200).json(data)
        } catch(error) {
            return res.status(500).json({error: 'Something wrong while delete todo'})
        }
    }
}