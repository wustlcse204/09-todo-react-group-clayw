import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';


class App extends Component {
  render() {
    return (
    <section id='todos' >
      <NewTodo />
    <Todo />
    </section>
    )
  }
}

export default App;
