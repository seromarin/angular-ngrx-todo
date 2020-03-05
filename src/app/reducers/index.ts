import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { todoReducer } from '../todo/reducers/todo.reducer';
import { environment } from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  todo: todoReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
