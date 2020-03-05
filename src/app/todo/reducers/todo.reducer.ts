import { createReducer, on } from '@ngrx/store';
import { addTask } from '../actions/todo.actions';

export const initialState = [
  {
    status: false,
    task: 'Cazar unicornios'
  }
];

const _todoReducer = createReducer(
  initialState,
  on(addTask, (state, todo) => [...state, todo])
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}

