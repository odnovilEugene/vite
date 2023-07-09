import './TodoCard.scss'
import {TodoType} from "../../types/TodoType.ts";
import {useState} from "react";
import {deleteTodo} from "../../models/todos";

export const TodoCard = (props: TodoType) => {

    const [checked, setChecked] = useState<boolean>(props.completed)


    return (
        <div className='todoCard'>
            <span className='id'>{props.id}</span>
            <span className='todoText'>{props.todo}</span>
            <input type='checkbox'
                   checked={checked}
                   name='completed'
                   onChange={() => {
                       setChecked(!checked)
                   }}/>
            <button className={`remove ${!checked ? 'disable' : ''}`} onClick={() => deleteTodo(props.id)}>Remove</button>
        </div>
    )
}