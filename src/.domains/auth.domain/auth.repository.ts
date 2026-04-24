import {
    TRepositoryResults
} from "../.shared.domain/general.types"
import {
    ISessionEntity
} from "./auth.entities"

export interface IAuthRepository {
    saveSession(userId: string, expiredAt: number): Promise<void>
    findBySessionId(sessionId: string): Promise<TRepositoryResults<ISessionEntity>>
}