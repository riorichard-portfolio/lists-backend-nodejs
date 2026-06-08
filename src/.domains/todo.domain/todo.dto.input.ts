// DO NOT EDIT THIS CODE 
// CODE IS GENERATED AUTOMATICLY

export interface ISaveTodoInputDTO {
    getDescription(): string
}

export interface ITodoListInputDTO {
    getTimeStart(): number
    getTimeEnd(): number
}

export interface IDoneTodoInputDTO {
    getTodoId(): string
}

export interface ITodoInputDTOFactory {
    createSaveTodoInputDTO(description: string): ISaveTodoInputDTO
    createTodoListInputDTO(timeStart: number, timeEnd: number): ITodoListInputDTO
    createDoneTodoInputDTO(todoId: string): IDoneTodoInputDTO
}
