import {
    TRepositoryResults
} from "../.shared.domain/general.types"
import {
    IUserEntity
} from "./user.entities"

export interface IUserRepository {
    saveUser(user: IUserEntity): Promise<void>
    findByEmail(email: string): Promise<TRepositoryResults<IUserEntity>>
}