import './TodoList.scss';
import {useFetchTodos} from "../../hooks/useFetchTodos.ts";
import {useList, useStore} from "effector-react";
import {TodoCard} from "../TodoCard/TodoCard.tsx";
import {useEffect} from "react";
import {$todos, addTodo, addTodoArray} from "../../models/todos";
import {TodoType} from "../../types/TodoType.ts";

export const TodoList = () => {

    const {data, loading} = useFetchTodos()

    const todoArray = useStore($todos)

    // $todos.watch(state => console.log(state.length))

    useEffect(() => {
        addTodoArray(data)
    }, [data])

    const todos = useList($todos, (todo) => (
        <TodoCard {...todo} key={todo.id}/>
    ))

    const constructTodo = (todo: string): TodoType => {
        return {completed: false, id: todoArray[todoArray.length - 1].id + 1, todo, userId: 229}
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const todo = event.target.input.value

        addTodo(constructTodo(todo))
        event.target.reset();
    }

    return (
        <div className='todoList'>

            <h1> TodoList: </h1>
                <form className='inputForm' onSubmit={handleSubmit}>
                    <label>Insert todo: </label>
                    <input type="text" name='input' placeholder='Enter todo'/>
                    <input type="submit" name='sumbit' value="Insert"/>
                </form>
                <div className='todos'>
                    {!loading ? todos : <span>Loading</span>}
                </div>
        </div>
    )
}