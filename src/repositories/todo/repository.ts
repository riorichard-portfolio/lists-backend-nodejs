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

import { todoRepositorySqlQueries } from "./sql.queries"
import { todoRepositoryOutputSchemas } from "./output.schemas"

export class TodoRepository implements ITodoRepository {
    constructor(
        private readonly sqlDb: ISqlQuery,
        private readonly todoEntitiesFactory: ITodoEntitiesFactory
    ) { }

    public async findMany(timeStart: number, timeEnd: number, userId: string): Promise<ITodoEntity[]> {
        const todoFindManyParams = this.sqlDb.createSqlParams()
        todoFindManyParams.push(timeStart)
        todoFindManyParams.push(timeEnd)
        todoFindManyParams.push(userId)
        const todoRows = await this.sqlDb.query(
            todoRepositorySqlQueries.findManyQuery,
            todoFindManyParams,
            todoRepositoryOutputSchemas.findManyOutputSchema
        )
        return todoRows.map(todo => this.todoEntitiesFactory.createTodoEntity(
            todo.todoId,
            todo.userId,
            todo.description,
            todo.createdAt,
            todo.status == 'DONE' ? 'DONE' : 'NOT_DONE'
        ))
    }

    public async findByTodoId(todoId: string): Promise<ITodoEntity | null> {
        const findByTodoIdParams = this.sqlDb.createSqlParams()
        findByTodoIdParams.push(todoId)
        const todoRows = await this.sqlDb.query(
            todoRepositorySqlQueries.findByTodoIdQuery,
            findByTodoIdParams,
            todoRepositoryOutputSchemas.findByTodoIdOutputSchema
        )
        const firstRow = todoRows[0]
        if (!firstRow) return null
        return this.todoEntitiesFactory.createTodoEntity(
            firstRow.todoId,
            firstRow.userId,
            firstRow.description,
            firstRow.createdAt,
            firstRow.status == 'DONE' ? 'DONE' : 'NOT_DONE'
        )
    }
}