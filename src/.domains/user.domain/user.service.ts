import {
    ISaveNewUserInputDTO
} from "./user.service.dto";

import {
    IUserEntityAttributeGetters
} from "./user.entities"

export interface IUserService {
    saveNewUser(newUserData: ISaveNewUserInputDTO): Promise<void>
    getUserByEmail(email: string): Promise<IUserEntityAttributeGetters>
}