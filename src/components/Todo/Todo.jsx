import React, { useState } from "react";
import "./Todo.css";
import toast from "react-hot-toast";

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

          toast.success(e.target.checked ? 'Todo marked as done!' : 'Todo marked as not done!');
        }}
      />
      <h2>
        {isEditting ? 
          <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
         : 
          <span>{todoData}</span>
        }
      </h2>
      <button
        onClick={() => {
          setIsEditting(!isEditting);
          onEdit(editText);

          toast.success(isEditting ? 'Todo edited successfully!' : 'Edit mode enabled');
        }}
      >
        {!isEditting ? "Edit" : "Save"}
      </button>
      <button onClick={() => {
        onDelete();
        toast.success('Todo deleted successfully');
      }}>Delete</button>
    </div>
  );
}
 
export default Todo;
