const findManyQuery = 'select * from todos where createdAt >= $1 and createdAt <= $2 and userId = $3'
const findByTodoIdQuery = 'select * from todos where todoId = $1'

export const todoRepositorySqlQueries = {
    findManyQuery,
    findByTodoIdQuery
}