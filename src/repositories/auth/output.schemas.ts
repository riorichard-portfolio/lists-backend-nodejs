import { IQuerySchema } from "../../.domains/.shared.domain/sql.db";

const findByUserIdOutputSchema = {
    sessionId: "string",
    userId: "string",
    expiredAt: "number"
} as const satisfies IQuerySchema

export const authRepositoryOutputSchemas = {
    findByUserIdOutputSchema
}