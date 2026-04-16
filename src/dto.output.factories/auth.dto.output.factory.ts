// DO NOT EDIT THIS CODE 
// CODE IS GENERATED AUTOMATICLY

import {
    IAuthOutputDTOFactory,
    ILoginOutputDTO,
} from "../.domains/auth.domain/auth.dto.output"

class LoginOutputDTO implements ILoginOutputDTO {
    constructor(
        private readonly accessToken: string,
        private readonly refreshToken: string
    ) { }

    public getAccessToken(): string {
        return this.accessToken
    }

    public getRefreshToken(): string {
        return this.refreshToken
    }
}

export class AuthOutputDTOFactory implements IAuthOutputDTOFactory {
    createLoginOutputDTO(accessToken: string, refreshToken: string): ILoginOutputDTO {
        return new LoginOutputDTO(accessToken, refreshToken)
    }

}