import { Action } from '@ngrx/store';
import { Todo } from './models/todo';

export enum ActionTypes {
  CHANGE_TODO_STATE = '[TODO] Change State',
  CREATE_TODO = '[TODO] Create',
  LOAD_TODOS = '[TODO] Load Todos',
  LOADED_TODOS = '[TODO] Loaded Todos',
}

export class ChangeTodoState implements Action {
  readonly type = ActionTypes.CHANGE_TODO_STATE;

  constructor(public payload: { id: number }) {
  }
}

export class CreateTodo implements Action {
  readonly type = ActionTypes.CREATE_TODO;

  constructor(public payload: { todo: Todo }) {
  }
}

export class LoadTodos implements Action {
  readonly type = ActionTypes.LOAD_TODOS;
}

export class LoadedTodos implements Action {
  readonly type = ActionTypes.LOADED_TODOS;

  constructor(public payload: { todos: Todo[] }) {
  }
}

export type TodoActions = ChangeTodoState | CreateTodo | LoadTodos | LoadedTodos;
