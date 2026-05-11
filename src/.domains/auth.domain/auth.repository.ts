import {
    ISessionEntity,
    ISessionEntityAttributeGetters
} from "./auth.entities"

export interface IAuthRepository {
    saveNew(newSessionData: ISessionEntityAttributeGetters): Promise<void>
    findByUserId(userId: string): Promise<ISessionEntity | null>
}