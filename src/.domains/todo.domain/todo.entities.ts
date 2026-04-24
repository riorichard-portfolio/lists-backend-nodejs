export interface ITodoEntity {
    getTodoId(): string
    getDescription(): string
    getCreatedAt(): number
}

export interface ITodoEntitiesFactory {
    createTodoEntity(todoId: string, description: string, createdAt: number): ITodoEntity
}