import { createAction, props } from '@ngrx/store';
import ITodoTask from 'src/app/interfaces/todo.interface';

export const addTask = createAction('[Todo Component] Add task', props<ITodoTask>());
export const completeTask = createAction('[Todo Component] Complete task');
export const deleteTask = createAction('[Todo Component] Delete task');
export const clearCompletedTask = createAction('[Todo Component] Clear completed task')
