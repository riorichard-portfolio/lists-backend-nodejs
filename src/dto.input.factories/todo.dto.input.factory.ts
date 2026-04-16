// DO NOT EDIT THIS CODE 
// CODE IS GENERATED AUTOMATICLY

import {
    ITodoInputDTOFactory,
    ISaveTodoInputDTO,
    ITodoListInputDTO,
    IDoneTodoInputDTO
} from "../.domains/todo.domain/todo.dto.input"

class SaveTodoInputDTO implements ISaveTodoInputDTO {
    constructor(
        private readonly description: string
    ) { }

    public getDescription(): string {
        return this.description
    }
}

class TodoListInputDTO implements ITodoListInputDTO {
    constructor(
        private readonly timeStart: string,
        private readonly timeEnd: string
    ) { }

    public getTimeStart(): string {
        return this.timeStart
    }

    public getTimeEnd(): string {
        return this.timeEnd
    }
}

class DoneTodoInputDTO implements IDoneTodoInputDTO {
    constructor(
        private readonly todoId: string
    ) { }

    public getTodoId(): string {
        return this.todoId
    }
}

export class TodoInputDTOFactory implements ITodoInputDTOFactory {
    createSaveTodoInputDTO(description: string): ISaveTodoInputDTO {
        return new SaveTodoInputDTO(description)
    }

    createTodoListInputDTO(timeStart: string, timeEnd: string): ITodoListInputDTO {
        return new TodoListInputDTO(timeStart, timeEnd)
    }

    createDoneTodoInputDTO(todoId: string): IDoneTodoInputDTO {
        return new DoneTodoInputDTO(todoId)
    }
}