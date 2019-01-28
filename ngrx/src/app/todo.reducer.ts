import { Todo } from './models/todo';

import * as TodoActions from './todo.action';
import { ActionTypes } from './todo.action';
import { ActionReducer } from '@ngrx/store';

const initialState: Todo[] = [
  {id: 1, text: 'foobar', done: false},
  {id: 2, text: 'foobarbaz', done: false},
  {id: 3, text: 'three', done: false},
];

export const todosReducer: ActionReducer<Todo[]> = (
  state: Todo[] = initialState,
  action: TodoActions.Actions
) => {
  switch (action.type) {
    case ActionTypes.CREATE_TODO:
      return createTodo(state, action);
    case ActionTypes.CHANGE_TODO_STATE:
      return changeTodoState(state, action);
    default:
      return state;
  }
};

function createTodo(state: Todo[], action: TodoActions.CreateTodo) {
  const todo: Todo = {
    id: Date.now(),
    text: action.payload.text,
    done: false,
  };
  console.info(`Creating ${JSON.stringify(todo)}`);

  const copy = state.slice();
  copy.push(todo);
  return copy;
}

function changeTodoState(state: Todo[], action: TodoActions.ChangeTodoState) {
  const copy = state.slice();
  const todo = copy.find((t => t.id === action.payload.id));
  console.info(`Changing state of todo ${todo.id} from ${todo.done} to ${!todo.done}`);
  todo.done = !todo.done;
  return copy;
}
