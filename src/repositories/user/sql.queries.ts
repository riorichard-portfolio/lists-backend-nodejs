const findByEmailQuery = `select * from users where email = $1`
const saveNewQuery = 'insert into users (user_id,email,hashed_password,full_name) values($1,$2,$3,$4)'

export const userRepositorySqlQueries = {
    findByEmailQuery,
    saveNewQuery
}