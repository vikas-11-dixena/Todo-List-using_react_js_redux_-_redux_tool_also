import "./AddTodo.css";
import {  useState } from "react";
import toast from "react-hot-toast";


function AddTodo({ addTodo }) {
  const [ inputText, setInputText ] = useState("");
  const handleAddTodo = () => {
    if(inputText.trim()) {
      addTodo({todoText : inputText});
      toast.success('Todo added successfully');
      setInputText('');
    }
    else {
      toast.error('please enter a valid todo!');
    }
  }

  return (
    <div className="add-wrapper">
      <input
        type="text"
        className="input"
        placeholder="Enter a new todo....."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
