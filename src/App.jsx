import React from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { useDispatch } from "react-redux";
import { addTodo,  deleteTodo,  editTodo, finishTodo } from './slices/todoSlices';
import { Toaster } from "react-hot-toast";
import { bindActionCreators } from "redux";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo, deleteTodo, editTodo, finishTodo }, dispatch);

  return (
    <>
      <h1 className="heading">Todo App</h1>
      <hr />
      <AddTodo addTodo={actions.addTodo} />
      <TodoList 
        deleteTodo={actions.deleteTodo} 
        finishedTodo={actions.finishTodo}  // Corrected typo here
        editTodo={actions.editTodo} 
      />
      <Toaster />
    </>
  );
}

export default App;
