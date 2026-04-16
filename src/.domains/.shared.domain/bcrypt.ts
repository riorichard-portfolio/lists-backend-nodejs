export interface IBcryptHasher {
    getBcryptHash(stringData: string): Promise<string>
}

export interface IBcryptVerifier {
    getBcryptVerify(stringToCompare: string, hashsedString: string): Promise<boolean>
}