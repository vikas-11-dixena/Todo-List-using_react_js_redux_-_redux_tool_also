import { FINISH_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO } from "../../constants/actions"

export const finishedTodo = (todo, isFinished) => ({ type: FINISH_TODO, payload: { todo, isFinished: isFinished } });
export const addTodo = (inputText) => ({ type: ADD_TODO, payload: { todoData: inputText } });
export const deleteTodo = (todo) => ({ type: DELETE_TODO, payload: { todo } });
export const editTodo = (todo, todoText) => ({ type: EDIT_TODO, payload: { todo, todoText } })

export default todoActions;