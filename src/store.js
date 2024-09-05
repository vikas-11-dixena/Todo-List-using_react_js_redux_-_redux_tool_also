import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import todoReducer from './slices/todoSlices';

const reducers = combineReducers({todo: todoReducer});
const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})
export default store;