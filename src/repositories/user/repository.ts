import {
    IUserEntity,
    IUserEntityAttributeGetters,
    IUserEntitiesFactory
} from "src/.domains/user.domain/user.entities"
import {
    ISqlQuery
} from "../../.domains/.shared.domain/sql.db"

import {
    IUserRepository
} from "../../.domains/user.domain/user.repository"

import { userRepositorySqlQueries } from "./sql.queries"
import { userRepositoryOutputSchemas } from "./output.schemas"

export class UserRepository implements IUserRepository {
    constructor(
        private readonly sqlDb: ISqlQuery,
        private readonly userEntitiesFactory: IUserEntitiesFactory
    ) { }

    public async findByEmail(email: string): Promise<IUserEntity | null> {
        const sqlParams = this.sqlDb.createSqlParams()
        sqlParams[0] = email
        const rows = await this.sqlDb.query(
            userRepositorySqlQueries.findByEmailQuery,
            sqlParams,
            userRepositoryOutputSchemas.findByEmailOutputSchema
        )
        if (!rows[0]) return null
        return this.userEntitiesFactory.createUserEntity(
            rows[0].userId,
            rows[0].email,
            rows[0].hashedPassword,
            rows[0].fullName
        )
    }

    public async saveNew(user: IUserEntityAttributeGetters): Promise<void> {
        const sqlParams = this.sqlDb.createSqlParams()
        sqlParams.push(user.getUserId())
        sqlParams.push(user.getEmail())
        sqlParams.push(user.getHashedPassword())
        sqlParams.push(user.getFullname())
        await this.sqlDb.query(
            userRepositorySqlQueries.saveNewQuery,
            sqlParams
        )
    }
}