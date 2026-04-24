export interface ISessionEntity {
    getSessionId(): string
    getUserId(): string
    getExpiredAt(): number
    isExpired(): boolean
}

export interface IAuthEntitiesFactory {
    createSessionEntity(sessionId: string, userId: string, expiredAt: number): ISessionEntity
}