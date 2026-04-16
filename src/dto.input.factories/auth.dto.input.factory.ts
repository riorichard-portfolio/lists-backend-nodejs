// DO NOT EDIT THIS CODE 
// CODE IS GENERATED AUTOMATICLY

import {
    IAuthInputDTOFactory,
    ILoginInputDTO,
    IRegisterInputDTO
} from "../.domains/auth.domain/auth.dto.input"

class LoginInputDTO implements ILoginInputDTO {
    constructor(
        private readonly email: string,
        private readonly password: string
    ) { }

    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }
}

class RegisterInputDTO implements IRegisterInputDTO {
    constructor(
        private readonly email: string,
        private readonly password: string,
        private readonly fullname: string
    ) { }

    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }

    public getFullname(): string {
        return this.fullname
    }
}

export class AuthInputDTOFactory implements IAuthInputDTOFactory {
    createLoginInputDTO(email: string, password: string): ILoginInputDTO {
        return new LoginInputDTO(email, password)
    }

    createRegisterInputDTO(email: string, password: string, fullname: string): IRegisterInputDTO {
        return new RegisterInputDTO(email, password, fullname)
    }
}