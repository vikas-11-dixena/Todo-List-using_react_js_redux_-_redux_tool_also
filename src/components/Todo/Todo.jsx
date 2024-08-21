import React, { useState } from 'react'

function Todo({todoData, isFinished, changeFinished}) {
    const [finished, setFinished] = useState(isFinished);
  return (
    <div className='todo-wrapper'>
      <input type='checkbox' checked={finished} onChange={(e) => {
        setFinished(e.target.checked)
        changeFinished(e.target.checked)
      }} />
      <h2>{todoData}</h2>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default Todo
