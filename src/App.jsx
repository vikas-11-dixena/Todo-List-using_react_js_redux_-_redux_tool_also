import React from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, deleteTodo, finishedTodo, editTodo } from "./components/actions/todoActions";


function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo, deleteTodo, finishedTodo, editTodo }, dispatch);
  
  return (
    <>
        <h1 className="heading">Todo App</h1>
        <hr />
        <AddTodo addTodo = {actions.addTodo} />
        <TodoList deleteTodo = {actions.deleteTodo} finishedTodo = {actions.finishedTodo} editTodo = {actions.editTodo} />
    </>
  );
}

export default App;
