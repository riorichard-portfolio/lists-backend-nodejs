import {
    ITodoEntitiesFactory,
    ITodoEntity
} from "../.domains/todo.domain/todo.entities"

import {
    IUtilities
} from "../.domains/.shared.domain/utilities"

class TodoEntity implements ITodoEntity {
    constructor(
        private readonly todoId: string,
        private readonly userId: string,
        private readonly description: string,
        private readonly createdAt: number,
        private status: 'DONE' | 'NOT_DONE'
    ) { }

    public getTodoId(): string {
        return this.todoId
    }

    public getUserId(): string {
        return this.userId
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

    public setDone(): this {
        this.status = 'DONE'
        return this
    }
}

export class TodoEntitiesFactory implements ITodoEntitiesFactory {
    constructor(
        private readonly utilities: IUtilities
    ) { }
    public createTodoEntity(todoId: string, userId: string, description: string, createdAt: number, status: 'DONE' | 'NOT_DONE'): ITodoEntity {
        return new TodoEntity(todoId, userId, description, createdAt, status)
    }
    
    public createNewTodoEntity(userId: string, description: string): ITodoEntity {
        const todoId = this.utilities.generateUUID()
        const nowTimeUnix = this.utilities.generateNowTimeUnix()
        return new TodoEntity(todoId, userId, description, nowTimeUnix, 'NOT_DONE')
    }
}