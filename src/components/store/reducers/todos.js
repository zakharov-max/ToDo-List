import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actionTypes';

const initialData = [];

export const todos = (state = initialData, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: action.id,
                text: action.text,
                isCompleted: action.isCompleted
            }];
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            );
        case REMOVE_TODO:
            const numIndex = +action.id;
            return state.filter(todo => todo.id !== numIndex);
        default:
            return state;
    }
}