// DO NOT EDIT THIS CODE 
// CODE IS GENERATED AUTOMATICLY

import {
    ITodoOutputDTOFactory,
    ITodoListOutputDTO,
    ITodo,
} from "../.domains/todo.domain/todo.dto.output"

class TodoData implements ITodo {
    constructor(
        private readonly description: string
    ) { }

    public getDescription(): string {
        return this.description
    }
}

class TodoListOutputDTO implements ITodoListOutputDTO {
    constructor(
        private readonly data: ITodo[]
    ) { }

    public getData(): ITodo[] {
        return [...this.data]
    }
}

export class TodoOutputDTOFactory implements ITodoOutputDTOFactory {
    createTodoData(description: string): ITodo {
        return new TodoData(description)
    }

    createTodoListOutputDTO(data: ITodo[]): ITodoListOutputDTO {
        return new TodoListOutputDTO(data)
    }

}