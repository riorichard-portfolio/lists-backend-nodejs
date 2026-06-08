import {
    ISessionEntity,
    ISessionEntityAttributeGetters,
    IAuthEntitiesFactory
} from "src/.domains/auth.domain/auth.entities"
import { IAuthRepository } from "../../.domains/auth.domain/auth.repository"

import {
    ISqlQuery
} from "../../.domains/.shared.domain/sql.db"

import { authRepositorySqlQueries } from "./sql.queries"
import { authRepositoryOutputSchemas } from "./output.schemas"

export class AuthRepository implements IAuthRepository {
    constructor(
        private readonly sqlDb: ISqlQuery,
        private readonly authEntitiesFactory: IAuthEntitiesFactory
    ) { }

    public async saveNew(newSessionData: ISessionEntityAttributeGetters): Promise<void> {
        const sqlParams = this.sqlDb.createSqlParams()
        sqlParams[0] = newSessionData.getSessionId()
        sqlParams[1] = newSessionData.getUserId()
        sqlParams[2] = newSessionData.getExpiredAt()
        await this.sqlDb.query(authRepositorySqlQueries.saveNewQuery, sqlParams)
    }

    public async findByUserId(userId: string): Promise<ISessionEntity | null> {
        const sqlParams = this.sqlDb.createSqlParams()
        sqlParams[0] = userId
        const rows = await this.sqlDb.query(
            authRepositorySqlQueries.findByUserIdQuery,
            sqlParams,
            authRepositoryOutputSchemas.findByUserIdOutputSchema
        )
        const firstRow = rows[0]
        if (!firstRow) return null
        return this.authEntitiesFactory.createSessionEntity(
            firstRow.session_id,
            firstRow.user_id,
            firstRow.expired_at
        )
    }
}