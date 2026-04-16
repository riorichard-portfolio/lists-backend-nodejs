export interface IKafkaConfig {
    getBrokerNodes(): string[]
    getClientId(): string
    getGroupId(): string
}

export interface IPostgreConfig {
    getHost(): string
    getUsername(): string
    getPassword(): string
    getDatabaseName(): string
    getPort(): number
    getMaxPool(): number
}

export interface IRedisConfig {
    getHost(): string
    getPort(): number
}

export interface IBcryptConfig {
    getSaltRounds(): number
}

export interface IAuthConfig {
    getSessionExpiredDays(): number
    getAccessTokenExpiredMins(): number
}

export interface IRestAppConfig {
    getPort(): number
}