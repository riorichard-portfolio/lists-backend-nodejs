export interface ITodoEntityAttributeGetters {
    getTodoId(): string
    getDescription(): string
    getCreatedAt(): number
    getStatus(): 'DONE' | 'NOT_DONE'
}

export interface ITodoEntity extends ITodoEntityAttributeGetters {
    setDone(): this
}

export interface ITodoEntitiesFactory {
    createTodoEntity(todoId: string, description: string, createdAt: number, status: 'DONE' | 'NOT_DONE'): ITodoEntity
}