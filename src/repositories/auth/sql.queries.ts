const saveNewQuery = "insert into sessions (sessionId,userId,expiredAt) values ($1,$2,$3)"
const findByUserIdQuery = `select * from sessions s where s.user_id = $1`

export const authRepositorySqlQueries = {
    saveNewQuery,
    findByUserIdQuery
}