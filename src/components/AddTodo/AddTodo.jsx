import "./AddTodo.css";
import { useContext, useState } from "react";
import TodoDispatchContext from "../TodoContext/TodoDispatchContext";

function AddTodo() {
  const [ inputText, setInputText ] = useState("");
  const { dispatch } = useContext(TodoDispatchContext);
  return (
    <div className="add-wrapper">
      <input
        type="text"
        className="input"
        id=""
        placeholder="Enter a new todo....."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: 'add_todo', payload: { todoData: inputText } })
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
