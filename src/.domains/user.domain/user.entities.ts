export interface IUserEntityAttributeGetters {
    getUserId(): string
    getEmail(): string
    getHashedPassword(): string
    getFullname(): string
}

export interface IUserEntity extends IUserEntityAttributeGetters {
}

export interface IUserEntitiesFactory {
    createUserEntity(userId: string, email: string, hashedPassword: string, fullName: string): IUserEntity
    createNewUserEntity(email: string, hashedPassword: string, fullName: string): IUserEntity
}
