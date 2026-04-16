// DO NOT EDIT THIS CODE 
// CODE IS GENERATED AUTOMATICLY

export interface ITodo {
    getDescription(): string
}

export interface ITodoListOutputDTO {
    getData(): ITodo[]
}

export interface ITodoOutputDTOFactory {
    createTodoData(description: string): ITodo
    createTodoListOutputDTO(data: ITodo[]): ITodoListOutputDTO
}
