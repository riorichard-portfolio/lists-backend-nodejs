import {
    TRepositoryResults
} from "../.shared.domain/general.types"
import {
    IUserEntity
} from "./user.entities"

export interface IUserRepository {
    saveUser(email: string, hashedPassword: string, fullName: string): Promise<void>
    findByEmail(email: string): Promise<TRepositoryResults<IUserEntity>>
}