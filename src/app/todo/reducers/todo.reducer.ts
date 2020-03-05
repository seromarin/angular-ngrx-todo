import { createReducer, on } from '@ngrx/store';
import { addTask } from '../actions/todo.actions';
import ITodoTask from 'src/app/interfaces/todo.interface';

export const initialState: ITodoTask[] = [
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

