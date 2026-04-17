import { Config } from './.base.config'
import { IKafkaConfig } from '../.domains/.shared.domain/config'

export class KafkaConfig extends Config implements IKafkaConfig {
    constructor(
        private readonly brokerNodes: string[],
        private readonly clientId: string,
        private readonly groupId: string
    ) {
        super()
    }

    public getBrokerNodes(): string[] {
        return this.brokerNodes
    }

    public getClientId(): string {
        return this.clientId
    }

    public getGroupId(): string {
        return this.groupId
    }
}