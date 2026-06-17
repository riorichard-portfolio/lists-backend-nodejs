import {
    ITodoEntity
} from "./todo.entities"

export interface ITodoRepository {
    findMany(timeStart: number, timeEnd: number, userId: string): Promise<ITodoEntity[]>
    findByTodoId(todoId: string): Promise<ITodoEntity | null>
}