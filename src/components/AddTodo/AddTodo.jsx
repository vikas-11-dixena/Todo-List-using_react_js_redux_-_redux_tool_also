import React from 'react'
import "./AddTodo.css"

function AddTodo() {
  return (
    <div className='add-wrapper'>
      <input type="text" className="input" id="" placeholder='Enter a new todo.....' />
      <button>Add</button>
    </div>
  )
}

export default AddTodo
