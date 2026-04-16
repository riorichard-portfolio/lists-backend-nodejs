// DO NOT EDIT THIS CODE 
// CODE IS GENERATED AUTOMATICLY

export interface ILoginOutputDTO {
    getAccessToken(): string
    getRefreshToken(): string
}

export interface IAuthOutputDTOFactory {
    createLoginOutputDTO(accessToken: string, refreshToken: string): ILoginOutputDTO
}
