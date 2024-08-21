import React from 'react'
import Todo from '../Todo/Todo'

function TodoList() {
    const list = [
        { id: 1, todoData: 'todo1'},
        { id: 2, todoData: 'todo2'}
    ]
  return (
    <div>
      {
        list.length > 0 && list.map((todo) => <Todo key={todo.id} todoData={todo.todoData} />)
      }
    </div>
  )
}

export default TodoList
