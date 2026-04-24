import {
    TRepositoryResults
} from "../.shared.domain/general.types"
import {
    ITodoEntity
} from "./todo.entities"

export interface ITodoRepository {
    findMany(timeStart: string, timeEnd: string): Promise<TRepositoryResults<ITodoEntity[]>>
    findByTodoId(todoId: string): Promise<TRepositoryResults<ITodoEntity>>
}