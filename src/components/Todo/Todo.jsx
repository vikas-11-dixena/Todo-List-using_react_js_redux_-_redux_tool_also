import React from 'react'

function Todo({todoData}) {
  return (
    <div className='todo-wrapper'>
      <input type='checkbox' />
      <h2>{todoData}</h2>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default Todo
