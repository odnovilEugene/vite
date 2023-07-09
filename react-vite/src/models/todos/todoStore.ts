// import React from 'react'
// import {createStore, createEvent, sample} from 'effector'
// import {TodoType} from "../types/TodoType.ts";
// //
// function createTodoListApi(initial: TodoType[] = []) {
//   const insert = createEvent<TodoType>()
//   const insertArray = createEvent<TodoType[]>()
//   const remove = createEvent<number>()
//   const change = createEvent<TodoType>()
//   const reset = createEvent<void>()
//
//   const $input = createStore<TodoType>({completed: false, id: 0, todo: '', userId: 0})
//     .on(change, (_, value) => value).reset(reset, insert)
//
//   const $todos = createStore<TodoType[]>(initial)
//     .on(insert, (todos, newTodo) => [...todos, newTodo])
//     .on(insertArray, (todos, newTodos) => [...todos, ...newTodos])
//     .on(remove, (todos, index) => todos.filter((_) => _.id !== index))
//
//   const submit = createEvent<React.SyntheticEvent>()
//   submit.watch(event => event.preventDefault())
//
//   sample({
//     clock: submit,
//     source: $input,
//     target: insert,
//   })
//
//   return {
//     submit,
//     insertArray,
//     remove,
//     change,
//     reset,
//     $todos,
//     $input,
//   }
// }
//
// export const todoListApi = createTodoListApi([])
//
// // const firstTodoList = createTodoListApi(['hello, world!'])
// // const secondTodoList = createTodoListApi(['hello, world!'])
//
// // function TodoList({label, model}) {
// //   const input = useStore(model.$input)
// //
// //   const todos = useList(model.$todos, (value, index) => (
// //     <li>
// //       {value} <button type="button" onClick={() => model.remove(index)}>Remove</button>
// //     </li>
// //   ))
// //
// //   return (
// //     <>
// //       <h1>{label}</h1>
// //       <ul>
// //         {todos}
// //       </ul>
// //       <form>
// //         <label>Insert todo: </label>
// //         <input type="text" value={input} onChange={(event) => model.change(event.currentTarget.value)}/>
// //         <input type="submit" onClick={model.submit} value="Insert"/>
// //       </form>
// //     </>
// //   )
// // }




