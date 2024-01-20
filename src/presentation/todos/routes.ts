import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDAtaSourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infrastructure/datasource/repositories/todo.repositorry.impl";

export class TodoRoutes {
    static get routes():Router{
        const router= Router();
        const datasource = new TodoDAtaSourceImpl();
        const todoRepository = new TodoRepositoryImpl(datasource);
        const todoController = new TodosController(todoRepository)
        router.get('/',todoController.getTodos);
        router.get('/:id',todoController.getTodoById);
        router.post('/create',todoController.createTodo);
        router.put('/:id',todoController.updateTodo);
        router.delete('/:id',todoController.deleteTodo);
        return router
    }
}