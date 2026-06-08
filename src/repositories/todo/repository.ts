import { 
    ITodoEntity,
    ITodoEntitiesFactory
 } from "src/.domains/todo.domain/todo.entities"
import {
    ISqlQuery
} from "../../.domains/.shared.domain/sql.db"

import {
    ITodoRepository
} from "../../.domains/todo.domain/todo.repository"

export class TodoRepository implements ITodoRepository {
    constructor(
        private readonly sqlDb: ISqlQuery,
        private readonly todoEntitiesFactory: ITodoEntitiesFactory
    ) {}

    public async findMany(timeStart: number, timeEnd: number): Promise<ITodoEntity[]> {
        
    }

    public async findByTodoId(todoId: string): Promise<ITodoEntity> {
        
    }
}