import { IQuerySchema } from "../../.domains/.shared.domain/sql.db";

const findByEmailOutputSchema = {
    user_id: "string",
    email: "string",
    hashed_password: "string",
    full_name: "string"
} as const satisfies IQuerySchema

export const userRepositoryOutputSchemas = {
    findByEmailOutputSchema
}