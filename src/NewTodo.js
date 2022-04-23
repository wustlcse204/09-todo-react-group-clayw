import React, {useState} from 'react'

const NewTodo = ({updateTodos}) =>  {
    const [todoInput, setTodoInput] = useState('')

    const addTodo = async ()=>{
try {
    const res = await fetch('https://cse204.work/todos', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            "x-api-key": "6db84e-9b7d7b-e1f7af-25c0ce-80bbfd"
        },
        body: JSON.stringify({ text: todoInput })
    })
console.log(res)
if(res.status == 200){
    updateTodos({text: todoInput})
    setTodoInput("")
}

}catch (err){
    console.error('ERROR', err)
}
    }
      return (
        <div className='newtodo'>
            <input type="text" id="box" onkeyup="enterKeyPress(event)"
            placeholder="Enter Your To Do List Here"
            value={todoInput}
            onChange={(e)=> setTodoInput(e.target.value)}
            onKeyUp={(event)=>{
                if (event.keyCode === 13) {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    addTodo()
                  }
            }}
            />
            <button type="button" id="entry" onClick={addTodo}>Submit</button>
        </div>
    )
}

export default NewTodo;

// class NewTodo extends Component {
//     render() {
//       return (
//         <div className='newtodo'>
//             <input type="text" id="box" onkeyup="enterKeyPress(event)"
//             placeholder="Enter Your To Do List Here" />
//             <button type="button" id="entry" onClick="addItem()">Submit</button>
//         </div>
//     )
// }}

// export default NewTodo;