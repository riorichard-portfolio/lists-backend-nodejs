export interface IUserEntity {
    getUserId(): string
    getEmail(): string
    getHashedPassword(): string
    getFullname(): string
}

export interface IUserEntitiesFactory {
    createUserEntity(userId: string, email: string, hashedPassword: string, fullName: string): IUserEntity
}
