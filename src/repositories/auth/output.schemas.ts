import { IQuerySchema } from "../../.domains/.shared.domain/sql.db";

const findByUserIdOutputSchema = {
    session_id: "string",
    user_id: "string",
    expired_at: "number"
} as const satisfies IQuerySchema

export const authRepositoryOutputSchemas = {
    findByUserIdOutputSchema
}