import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoContext from "./components/TodoContext/TodoContext";
import todoReducer from "./components/reducers/todoReducer";
import TodoDispatchContext from "./components/TodoContext/TodoDispatchContext";

function App() {
  // const [ list, setList] = useState([
  //     {id: 1, todoData: 'todo1', finished: false},
  //     {id: 2, todoData: 'todo2', finished: true}
  // ]);

  const [list, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <h1 className="heading">Todo App</h1>
        <hr />
        <AddTodo
          updateList={(todo) =>
            setList([
              ...list,
              { id: list.length + 1, todoData: todo, finished: false }
            ])
          }
        />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
