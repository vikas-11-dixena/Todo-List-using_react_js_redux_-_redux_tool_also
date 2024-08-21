import React, { useState } from 'react'
import "./App.css";
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
    const [ lsit, setList] = useState([
        {id: 1, todoData: 'todo1', finished: false},
        {id: 2, todoData: 'todo2', finished: true}
    ])
  return (
    <div>
      <h1 className='heading'>Todo App</h1>
      <hr />
      <AddTodo updateList={(todo) => setList([
        ...lsit, {id: lsit.length + 1, todoData: todo, finished: false}
      ])} />
      <TodoList lsit={list} setList={setList} />
    </div>
  )
}

export default App
