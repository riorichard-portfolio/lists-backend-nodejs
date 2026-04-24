import {
    TRepositoryResults
} from "../.shared.domain/general.types"
import {
    ISessionEntity
} from "./auth.entities"

export interface IAuthRepository {
    saveSession(session: ISessionEntity): Promise<void>
    findBySessionId(sessionId: string): Promise<TRepositoryResults<ISessionEntity>>
}