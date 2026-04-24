export interface IUserEntity {
    getEmail(): string
    getHashedPassword(): string
    getFullname(): string
    getUserId(): string
}
