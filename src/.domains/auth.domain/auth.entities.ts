export interface ISessionEntity {
    getSessionId(): string
    getUserId(): string
    getExpiredAt(): number
    isExpired(): boolean
}