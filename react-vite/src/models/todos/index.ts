import {createEvent, createStore} from "effector";
import {TodoType} from "../../types/TodoType.ts";


export const addTodo = createEvent<TodoType>("add todo")
export const addTodoArray = createEvent<TodoType[]>('add todo array')
export const deleteTodo = createEvent<number>("delete todo")

export const $todos = createStore<TodoType[]>([])
    .on(addTodo, (state, newTodo) => [newTodo, ...state])
    .on(addTodoArray, (state, newTodoArray) => {
        return !state.every((element, index) => element === newTodoArray[index])
            ? [...state] : [...newTodoArray, ...state]
    })
    .on(deleteTodo, (todos, index) => todos.filter((_) => _.id !== index))
