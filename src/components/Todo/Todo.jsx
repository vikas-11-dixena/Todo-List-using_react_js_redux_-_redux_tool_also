import React, { useState } from "react";
import "./Todo.css";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditting, setIsEditting] = useState(false);
  const [editText, setEditText] = useState(todoData);
  return (
    <div className="todo-wrapper">
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      <h2>
        {isEditting ? (
          <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
        ) : (
          <span>{todoData}</span>
        )}
      </h2>
      <button
        onClick={() => {
          setIsEditting(!isEditting);
          onEdit(editText);
        }}
      >
        {!isEditting ? "Edit" : "Save"}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
