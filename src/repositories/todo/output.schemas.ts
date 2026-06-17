import { IQuerySchema } from "../../.domains/.shared.domain/sql.db";

const findManyOutputSchema = {
    todoId: 'string',
    userId: 'string',
    description: 'string',
    createdAt: 'number',
    status: 'string'
} as const satisfies IQuerySchema

const findByTodoIdOutputSchema = {
    todoId: 'string',
    userId: 'string',
    description: 'string',
    createdAt: 'number',
    status: 'string'
} as const satisfies IQuerySchema

export const todoRepositoryOutputSchemas = {
    findManyOutputSchema,
    findByTodoIdOutputSchema
}