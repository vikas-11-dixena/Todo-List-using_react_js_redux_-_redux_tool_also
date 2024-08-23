import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ updateList }) {
  const [inputText, setInputText] = useState("");
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
          updateList(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
