import {
    IUserEntity,
    IUserEntityAttributeGetters
} from "./user.entities"

export interface IUserRepository {
    saveUser(user: IUserEntityAttributeGetters): Promise<void>
    findByEmail(email: string): Promise<IUserEntity>
}