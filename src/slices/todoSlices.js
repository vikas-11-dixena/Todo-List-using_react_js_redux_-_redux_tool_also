import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
};
const todoSlices = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let todoText = action.payload.todoText;
            state.todoList.push({id: state.todoList.length + 1, todoData: todoText, finished: false })
        },
        editTodo: (todo, action) => {
            let payloadTodo = action.payload.todo;
            let todoText = action.payload.todoText;
            todo.todoList = todo.todoList.map(t => {
                if(t.id == payloadTodo.id) {
                    t.todoData = todoText;
                }
                return t;
            });
        },
        finishTodo: (todo, action) => {
            let payloadTodo = action.payload.todo;
            let isfinished = action.payload.isfinished;
            todo.todoList = todo.todoList.map(t => {
                if(t.id == payloadTodo.id) {
                    todo.finished = isfinished
                }
                return t;
            });
        },
        deleteTodo: (todo, action) => {
            let payloadTodo = action.payload.todo;
            todo.todoList = todo.todoList.filter(t => t.id != payloadTodo.id)
        }
    }
}); 

export const { addTodo, editTodo, finishTodo, deleteTodo } = todoSlices.actions;
export default todoSlices.reducer;
