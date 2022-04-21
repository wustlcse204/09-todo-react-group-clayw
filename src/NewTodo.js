import React, {Component} from 'react'

class NewTodo extends Component {
    render() {
      return (
<div className='newtodo'>
<input type="text" id="box" onkeyup="enterKeyPress(event)"
 placeholder="Enter Your To Do List Here" />
<button type="button" id="entry" onClick="addItem()">Submit</button>
</div>
    )
}}

export default NewTodo;