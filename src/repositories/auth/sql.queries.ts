const saveNewQuery = "insert into sessions (session_id,user_id,expired_at) values ($1,$2,$3)"
const findByUserIdQuery = `select s.user_id as userId, s.session_id as sessionId,
 s.expired_at as expiredAt from sessions s where s.user_id = $1`

export const authRepositorySqlQueries = {
    saveNewQuery,
    findByUserIdQuery
}