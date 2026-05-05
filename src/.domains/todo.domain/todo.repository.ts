import {
    ITodoEntity
} from "./todo.entities"

export interface ITodoRepository {
    findMany(timeStart: string, timeEnd: string): Promise<ITodoEntity[]>
    findByTodoId(todoId: string): Promise<ITodoEntity>
}