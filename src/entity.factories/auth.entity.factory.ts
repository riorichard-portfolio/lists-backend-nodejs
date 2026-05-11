import {
    IAuthEntitiesFactory,
    ISessionEntity
} from "../.domains/auth.domain/auth.entities"

import {
    IUtilities
} from "../.domains/.shared.domain/utilities"

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
    constructor(
        private readonly utilities: IUtilities
    ) { }
    public createSessionEntity(sessionId: string, userId: string, expiredAt: number): ISessionEntity {
        return new SessionEntity(userId, sessionId, expiredAt)
    }

    public createNewSessionEntity(userId: string, expiredForMs: number): ISessionEntity {
        const sessionId = this.utilities.generateUUID()
        const expiredAt = this.utilities.generateTimeUnix(expiredForMs)
        return new SessionEntity(userId, sessionId, expiredAt)
    }
}