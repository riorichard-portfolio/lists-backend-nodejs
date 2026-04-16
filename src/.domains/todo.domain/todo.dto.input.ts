// DO NOT EDIT THIS CODE 
// CODE IS GENERATED AUTOMATICLY

export interface ISaveTodoInputDTO {
    getDescription(): string
}

export interface ITodoListInputDTO {
    getTimeStart(): string
    getTimeEnd(): string
}

export interface IDoneTodoInputDTO {
    getTodoId(): string
}

export interface ITodoInputDTOFactory {
    createSaveTodoInputDTO(description: string): ISaveTodoInputDTO
    createTodoListInputDTO(timeStart: string, timeEnd: string): ITodoListInputDTO
    createDoneTodoInputDTO(todoId: string): IDoneTodoInputDTO
}
