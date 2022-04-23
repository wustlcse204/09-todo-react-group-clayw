import React, { useState } from 'react';
import NewTodo from './NewTodo';
import './Todo.css';

const Todo = ({item, deleteTodo, completeTodo}) => {

    const [finished, setFinished] = useState(item.completed)


    return (
        <div className="todo-container">
            <div
            className='todo'
            >
                <p>{item.text}</p>
                <div
                className='todo-btn'
                >
                <button type="button" className={`${finished && 'done'}`}
                onClick={()=>{
                    completeTodo(item.id, !item.completed);
                setFinished(!item.completed)
                }}>{finished ? 'Done': 'Complete'}</button>
                <button type="button" onClick={()=>deleteTodo(item.id)}>Delete</button>
                </div>
            </div>
        </div>   
    );
  
}

export default Todo;
