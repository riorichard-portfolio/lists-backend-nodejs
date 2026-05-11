import {
    ISaveTodoInputDTO,
    IDoneTodoInputDTO,
    ITodoListInputDTO
} from "./todo.dto.input"

import {
    TApplicationResults
} from "../.shared.domain/general.types"

import {
    ITodoListOutputDTO
} from './todo.dto.output'

import {
    TDoneTodoFailedReason
} from './todo.usecase.failed.reasons'

export interface ITodoUsecase {
    saveNewTodo(newTodoToSave: ISaveTodoInputDTO): Promise<TApplicationResults<null>>
    doneTodo(todoToDoneData: IDoneTodoInputDTO): Promise<TApplicationResults<null, TDoneTodoFailedReason>>
    todoList(listQuery: ITodoListInputDTO): Promise<TApplicationResults<ITodoListOutputDTO>>
}