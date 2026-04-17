import { IPostgreConfig } from "../.domains/.shared.domain/config"
import { Config } from "./.base.config"

export class PostgreConfig extends Config implements IPostgreConfig {
    constructor(
        private readonly host: string,
        private readonly username: string,
        private readonly databaseName: string,
        private readonly password: string,
        private readonly port: number,
        private readonly maxPool: number
    ) {
        super()
    }
    public getHost(): string {
        return this.host
    }
    public getUsername(): string {
        return this.username
    }
    public getDatabaseName(): string {
        return this.databaseName
    }
    public getPassword(): string {
        return this.password
    }
    public getPort(): number {
        return this.port
    }

    public getMaxPool(): number {
        return this.maxPool
    }
}