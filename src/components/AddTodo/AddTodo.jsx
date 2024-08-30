import "./AddTodo.css";
import {  useState } from "react";


function AddTodo({ addTodo }) {
  const [ inputText, setInputText ] = useState("");

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
          addTodo(inputText)
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
