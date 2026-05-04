import {
    ITodoEntityAttributeGetters
} from "./todo.entities"

export interface TodoEventPublisher {
    publishTodoToSave(todoToSave: ITodoEntityAttributeGetters): Promise<void>
    publishTodoToBeDone(todoId: string): Promise<void>
}