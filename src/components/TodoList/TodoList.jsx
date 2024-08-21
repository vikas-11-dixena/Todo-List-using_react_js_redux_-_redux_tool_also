import React from "react";
import Todo from "../Todo/Todo";

function TodoList({ list, setList }) {
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todoData={todo.todoData}
            isFinished={todo.finished}
            changeFinished={(isFinished) => {console.log("isFinished", isFinished);
                const updateList = list.map((t) => {
                    if(t.id == todo.id) {
                        todo.finished = isFinished
                    }
                    return t;
                })
                setList(updateList)
            }}
          />
        ))}
    </div>
  );
}

export default TodoList;
