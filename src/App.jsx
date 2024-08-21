import React from 'react'
import "./App.css";
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div>
      <h1 className='heading'>Todo App</h1>
      <hr />
      <TodoList/>
    </div>
  )
}

export default App
