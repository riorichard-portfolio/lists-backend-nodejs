import {
    IUtilities
} from "../.domains/.shared.domain/utilities"

import crypto from "crypto"

export class Utilities implements IUtilities {
    public generateTimeUnix(msAdded: number = 0): number {
        return Date.now() + msAdded
    }

    public generateUUID(): string {
        return crypto.randomUUID()
    }
}