import { combineReducers } from 'redux';
import { todos } from './todos';

//reducers — это функции, которые обрабатывают экшены и могут вносить изменения в состояние.

export default combineReducers({
    todos
})