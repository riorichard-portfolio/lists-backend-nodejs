import {
    IUserEntitiesFactory,
    IUserEntity
} from "../.domains/user.domain/user.entities"

class UserEntity implements IUserEntity {
    constructor(
        private readonly userId: string,
        private readonly email: string,
        private readonly fullName: string,
        private readonly hashedPassword: string
    ) { }

    public getUserId(): string {
        return this.userId
    }

    public getEmail(): string {
        return this.email
    }

    public getFullname(): string {
        return this.fullName
    }

    public getHashedPassword(): string {
        return this.hashedPassword
    }
}

export class UserEntitiesFactory implements IUserEntitiesFactory {
    public createUserEntity(userId: string, email: string, hashedPassword: string, fullName: string): IUserEntity {
        return new UserEntity(userId, email, fullName, hashedPassword)
    }
}