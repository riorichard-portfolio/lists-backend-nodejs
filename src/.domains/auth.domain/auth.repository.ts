import {
    TRepositoryResults
} from "../.shared.domain/general.types"
import {
    ISessionEntity,
    ISessionEntityAttributeGetters
} from "./auth.entities"

export interface IAuthRepository {
    saveSession(session: ISessionEntityAttributeGetters): Promise<void>
    findBySessionId(sessionId: string): Promise<TRepositoryResults<ISessionEntity>>
}