import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
        <div className="todo-container">
            <div
            className='todo'
            >
                <p>Test Todo Item</p>
                <div
                className='todo-btn'
                >
                <button>Done</button>
                </div>
            </div>
        </div>   
    );
  }
}

export default Todo;
