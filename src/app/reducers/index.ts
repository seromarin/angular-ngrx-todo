import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { todoReducer } from '../todo/reducers/todo.reducer';
import { environment } from '../../environments/environment';
import { Todo } from '../models/todo.model';
import ITodoTask from '../interfaces/todo.interface';

export interface State {
  todo: Todo[];
}

export const reducers: ActionReducerMap<State> = {
  todo: todoReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
