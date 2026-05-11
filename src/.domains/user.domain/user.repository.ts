import {
    IUserEntity,
    IUserEntityAttributeGetters
} from "./user.entities"

export interface IUserRepository {
    saveNew(user: IUserEntityAttributeGetters): Promise<void>
    findByEmail(email: string): Promise<IUserEntity | null>
}