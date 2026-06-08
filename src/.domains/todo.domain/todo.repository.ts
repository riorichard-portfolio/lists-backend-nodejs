import {
    ITodoEntity
} from "./todo.entities"

export interface ITodoRepository {
    findMany(timeStart: number, timeEnd: number): Promise<ITodoEntity[]>
    findByTodoId(todoId: string): Promise<ITodoEntity>
}