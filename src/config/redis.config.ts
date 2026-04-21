import { IRedisConfig } from "../.domains/.shared.domain/config"
import { Config } from "./.base.config"

export class RedisConfig extends Config implements IRedisConfig {
    constructor(
        private readonly host: string,
        private readonly port: number
    ) {
        super()
    }
    public getHost(): string {
        return this.host
    }
    public getPort(): number {
        return this.port
    }
}