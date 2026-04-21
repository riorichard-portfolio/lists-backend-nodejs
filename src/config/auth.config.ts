import { Config } from './.base.config'
import { IAuthConfig } from '../.domains/.shared.domain/config'

export class AuthConfig extends Config implements IAuthConfig {
    constructor(
        private readonly accessTokenExpiredMins: number,
        private readonly sessionExpiredDays: number
    ) {
        super()
    }

    public getAccessTokenExpiredMins(): number {
        return this.accessTokenExpiredMins
    }

    public getSessionExpiredDays(): number {
        return this.sessionExpiredDays
    }
}