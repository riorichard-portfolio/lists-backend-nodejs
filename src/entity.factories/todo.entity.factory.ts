import {
    ITodoEntitiesFactory,
    ITodoEntity
} from "../.domains/todo.domain/todo.entities"

class TodoEntity implements ITodoEntity {
    constructor(
        private readonly todoId: string,
        private readonly description: string,
        private readonly createdAt: number
    ) { }

    public getTodoId(): string {
        return this.todoId
    }

    public getDescription(): string {
        return this.description
    }

    public getCreatedAt(): number {
        return this.createdAt
    }
}

export class TodoEntitiesFactory implements ITodoEntitiesFactory {
    public createTodoEntity(todoId: string, description: string, createdAt: number): ITodoEntity {
        return new TodoEntity(todoId, description, createdAt)
    }
}