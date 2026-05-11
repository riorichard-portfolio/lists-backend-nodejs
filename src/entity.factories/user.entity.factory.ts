import {
    IUserEntitiesFactory,
    IUserEntity
} from "../.domains/user.domain/user.entities"

import {
    IUtilities
} from "../.domains/.shared.domain/utilities"

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
    constructor(
        private readonly utilities: IUtilities
    ) { }
    public createUserEntity(userId: string, email: string, hashedPassword: string, fullName: string): IUserEntity {
        return new UserEntity(userId, email, fullName, hashedPassword)
    }

    public createNewUserEntity(email: string, hashedPassword: string, fullName: string): IUserEntity {
        const userId = this.utilities.generateUUID()
        return new UserEntity(userId, email, fullName, hashedPassword)
    }
}