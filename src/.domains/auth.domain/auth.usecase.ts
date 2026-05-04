import {
    ILoginInputDTO,
    IRegisterInputDTO
} from "./auth.dto.input"

import {
    ILoginOutputDTO
} from "./auth.dto.output"

export interface IAuthUsecase {
    login(loginData: ILoginInputDTO): Promise<ILoginOutputDTO>
    register(registerData: IRegisterInputDTO): Promise<void>
}