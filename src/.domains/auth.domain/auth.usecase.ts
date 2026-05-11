import {
    TApplicationResults
} from "../.shared.domain/general.types"

import {
    ILoginInputDTO,
    IRegisterInputDTO
} from "./auth.dto.input"

import {
    ILoginOutputDTO
} from "./auth.dto.output"

import {
    TLoginFailedReason,
    TRegisterFailedReason
} from "./auth.usecase.failed.reasons"

export interface IAuthUsecase {
    login(loginData: ILoginInputDTO): Promise<TApplicationResults<ILoginOutputDTO, TLoginFailedReason>>
    register(registerData: IRegisterInputDTO): Promise<TApplicationResults<null, TRegisterFailedReason>>
}