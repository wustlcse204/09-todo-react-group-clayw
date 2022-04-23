import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewTodo from './NewTodo';
import Todo from './Todo';
import './Todo.css';


const App = ()=>{
    const [todos, setTodos] = useState([])

    useEffect(()=>{
  fetchTodos()
    }, [])

    const updateTodos =(item)=>{
        console.log('UPDAAING')
        setTodos(prev => [...prev, item])
    }

    const fetchTodos = async ()=>{
        try{
            const response = await fetch('https://cse204.work/todos', {
            method:'GET',
            headers:{
                "x-api-key": "6db84e-9b7d7b-e1f7af-25c0ce-80bbfd"
            }
            }).then((res)=> res.json())
console.log('RESPONSE', response)
            setTodos(response)

        } catch (err){
            console.error('Error:', err)
        }
    }

    const deleteTodo = async (id) =>{
        try{
            const response = await fetch(`https://cse204.work/todos/${id}`, {
            method:'DELETE',
            headers:{
                "x-api-key": "6db84e-9b7d7b-e1f7af-25c0ce-80bbfd"
            }
            })
            const newTodos = todos.filter(item => item.id !== id);
            setTodos(newTodos)

        } catch (err){
            console.error('Error:', err)
        }
    }
    const completeTodo = async (id, completed) =>{
        console.log('ID', id)
        try{
            const response = await 
            axios({
                method: 'PUT',
                url: `https://cse204.work/todos/${id}`,
                data: {
                    completed: true 
                },
                headers: { "x-api-key": "6db84e-9b7d7b-e1f7af-25c0ce-80bbfd"}
              });
           
            console.log('UPDATE', response)
            // const newTodos = todos.filter(item => item.id !== id);
            // setTodos(newTodos)

        } catch (err){
            console.error('Error:', err)
        }
    }



const sortTodos = () =>{
    let oldTodos = todos;
    console.log('Before Sort', oldTodos)
    // const sorted = oldTodos.sort(function(a, b) {
    //     var textA = a.text.toUpperCase();
    //     var textB = b.text.toUpperCase();
    //     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    // });
    let sorted =  [...oldTodos].sort(function(a, b) {
            var textA = a.text.toUpperCase();
            var textB = b.text.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

    console.log('post Sort', sorted)

    setTodos(sorted);
}

 
    return (
        <div className="todo-container">
         
        <NewTodo updateTodos={updateTodos} />
        <button type="button" id="toSort" onClick={sortTodos}>Sort</button>
        <div className='todo_container'>

        {todos.length ? todos.map(item => <Todo key={item.id} item={item} deleteTodo={deleteTodo} completeTodo={completeTodo} />): <span>No Todos</span>}
        </div>
    </div>  
    )
}

export default App