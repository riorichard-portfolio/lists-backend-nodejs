import {
    ISaveNewUserInputDTO
} from "./user.service.dto";

import {
    IUserEntityAttributeGetters
} from "./user.entities"

import {
    TApplicationResults
} from "../.shared.domain/general.types";

import {
    TGetUserByEmailFailedReason,
    TSaveNewUserFailedReason
} from "./user.service.failed.reasons";

export interface IUserService {
    saveNewUser(newUserData: ISaveNewUserInputDTO): Promise<TApplicationResults<null, TSaveNewUserFailedReason>>
    getUserByEmail(email: string): Promise<TApplicationResults<IUserEntityAttributeGetters, TGetUserByEmailFailedReason>>
}