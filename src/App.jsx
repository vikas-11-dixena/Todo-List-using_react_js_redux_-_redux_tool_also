import React, { useState } from 'react'
import "./App.css";
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import TodoContext from './components/TodoContext/TodoContext';

function App() {
    const [ list, setList] = useState([
        {id: 1, todoData: 'todo1', finished: false},
        {id: 2, todoData: 'todo2', finished: true}
    ]);
  return (
    <TodoContext.Provider value={{list, setList}}>
      <h1 className='heading'>Todo App</h1>
      <hr />
      <AddTodo updateList={(todo) => setList([
        ...list, {id: list.length + 1, todoData: todo, finished: false}
      ])} />
      <TodoList list={list} setList={setList} />
    </TodoContext.Provider>
  )
}

export default App
