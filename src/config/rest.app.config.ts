import { Config } from './.base.config'
import { IRestAppConfig } from '../.domains/.shared.domain/config'

export class RestAppConfig extends Config implements IRestAppConfig {
    constructor(
        private readonly port: number
    ) {
        super()
    }

    public getPort(): number {
        return this.port
    }
}