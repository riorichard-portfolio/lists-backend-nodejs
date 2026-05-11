import { IQuerySchema } from "../../.domains/.shared.domain/sql.db";

const findByEmailOutputSchema = {
    userId: "string",
    email: "string",
    hashedPassword: "string",
    fullName: "string"
} as const satisfies IQuerySchema

export const userRepositoryOutputSchemas = {
    findByEmailOutputSchema
}