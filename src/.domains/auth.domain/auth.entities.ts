export interface ISessionEntityAttributeGetters {
    getSessionId(): string
    getUserId(): string
    getExpiredAt(): number
}

export interface ISessionEntity extends ISessionEntityAttributeGetters {
    isExpired(): boolean
}

export interface IAuthEntitiesFactory {
    createSessionEntity(sessionId: string, userId: string, expiredAt: number): ISessionEntity
}