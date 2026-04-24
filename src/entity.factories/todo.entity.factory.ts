import {
    ITodoEntitiesFactory,
    ITodoEntity
} from "../.domains/todo.domain/todo.entities"

class TodoEntity implements ITodoEntity {
    constructor(
        private readonly todoId: string,
        private readonly description: string,
        private readonly createdAt: number,
        private status: 'DONE' | 'NOT_DONE'
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

    public getStatus(): "DONE" | "NOT_DONE" {
        return this.status
    }

    public setDone(): void {
        this.status = 'DONE'
    }
}

export class TodoEntitiesFactory implements ITodoEntitiesFactory {
    public createTodoEntity(todoId: string, description: string, createdAt: number, status: 'DONE' | 'NOT_DONE'): ITodoEntity {
        return new TodoEntity(todoId, description, createdAt, status)
    }
}