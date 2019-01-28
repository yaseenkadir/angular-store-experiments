import { Action } from '@ngrx/store';

export enum ActionTypes {
  CHANGE_TODO_STATE = '[TODO] Change State',
  CREATE_TODO = '[TODO] Create',
}

export class ChangeTodoState implements Action {
  readonly type = ActionTypes.CHANGE_TODO_STATE;

  constructor(public payload: { id: number }) {
  }
}

export class CreateTodo implements Action {
  readonly type = ActionTypes.CREATE_TODO;

  constructor(public payload: { text: string }) {
  }
}

export type Actions = ChangeTodoState | CreateTodo;
