// DO NOT EDIT THIS CODE 
// CODE IS GENERATED AUTOMATICLY

export interface ILoginInputDTO {
    getEmail(): string
    getPassword(): string
}

export interface IRegisterInputDTO {
    getEmail(): string
    getPassword(): string
    getFullname(): string
}

export interface IAuthInputDTOFactory {
    createLoginInputDTO(email: string, password: string): ILoginInputDTO
    createRegisterInputDTO(email: string, password: string, fullname: string): IRegisterInputDTO
}
