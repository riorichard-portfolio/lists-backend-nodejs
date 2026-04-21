import { Config } from './.base.config'
import { IBcryptConfig } from '../.domains/.shared.domain/config'

export class BcryptConfig extends Config implements IBcryptConfig {
    constructor(
        private readonly saltRounds: number
    ) {
        super()
    }

    public getSaltRounds(): number {
        return this.saltRounds
    }
}