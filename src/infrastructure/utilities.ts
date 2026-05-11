import {
    IUtilities
} from "../.domains/.shared.domain/utilities"

import crypto from "crypto"

export class Utilities implements IUtilities {
    public generateTimeUnix(msAdded?: number): number {
        if (msAdded) return Date.now() + msAdded
        return Date.now()
    }

    public generateUUID(): string {
        return crypto.randomUUID()
    }
}