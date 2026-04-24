import {
    IAuthEntitiesFactory,
    ISessionEntity
} from "../.domains/auth.domain/auth.entities"

class SessionEntity implements ISessionEntity {
    constructor(
        private readonly userId: string,
        private readonly sessionId: string,
        private readonly expiredAt: number
    ) { }

    public getUserId(): string {
        return this.userId
    }

    public getSessionId(): string {
        return this.sessionId
    }

    public getExpiredAt(): number {
        return this.expiredAt
    }

    public isExpired(): boolean {
        return this.expiredAt < Date.now()
    }
}

export class AuthEntitiesFactory implements IAuthEntitiesFactory {
    public createSessionEntity(sessionId: string, userId: string, expiredAt: number): ISessionEntity {
        return new SessionEntity(userId, sessionId, expiredAt)
    }
}