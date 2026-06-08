const findManyQuery = 'select * from todos where created_at >= $1 and created_at <= $2'
const findByTodoIdQuery = 'select * from todos where todo_id = $1'

export const todoRepositorySqlQueries = {
    findManyQuery,
    findByTodoIdQuery
}