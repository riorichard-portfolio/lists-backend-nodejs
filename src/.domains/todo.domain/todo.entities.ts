export interface ITodoEntity {
    getTodoId(): string
    getDescription(): string
    getCreatedAt(): number
    getStatus(): 'DONE' | 'NOT_DONE'
    setDone(): void
}

export interface ITodoEntitiesFactory {
    createTodoEntity(todoId: string, description: string, createdAt: number, status: 'DONE' | 'NOT_DONE'): ITodoEntity
}