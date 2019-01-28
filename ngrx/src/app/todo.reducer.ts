import { Todo } from './models/todo';

import * as TodoActions from './todo.action';
import { ActionTypes } from './todo.action';
import { ActionReducer } from '@ngrx/store';

export interface TodosState {
  todos: Todo[];
  loading: boolean;
}

const initialState: TodosState = {
  loading: false,
  todos: []
};

export const todosReducer: ActionReducer<TodosState> = (
  state: TodosState = initialState,
  action: TodoActions.TodoActions
) => {
  console.info(`Action ${JSON.stringify(action)}`);
  switch (action.type) {
    case ActionTypes.CREATE_TODO:
      return createTodo(state, action);
    case ActionTypes.CHANGE_TODO_STATE:
      return changeTodoState(state, action);
    case ActionTypes.LOAD_TODOS:
      return loadTodos(state, action);
    case ActionTypes.LOADED_TODOS:
      return loadedTodos(state, action);
    default:
      console.info(`Unhandled action ${JSON.stringify(action)}`);
      return state;
  }
};

function createTodo(state: TodosState, action: TodoActions.CreateTodo): TodosState {
  console.info(`Creating ${JSON.stringify(action.payload.todo)}`);

  const copy = state.todos.slice();
  copy.push(action.payload.todo);
  return {
    ...state,
    todos: copy,
  };
}

function changeTodoState(state: TodosState, action: TodoActions.ChangeTodoState): TodosState {
  const copy = state.todos.slice();
  const todo = copy.find((t => t.id === action.payload.id));
  console.info(`Changing state of todo ${todo.id} from ${todo.done} to ${!todo.done}`);
  todo.done = !todo.done;
  return {
    ...state,
    todos: copy,
  };
}

function loadTodos(state: TodosState, action: TodoActions.LoadTodos): TodosState {
  console.info('loading todos');
  return {
    ...state,
    loading: true,
  };
}

function loadedTodos(state: TodosState, action: TodoActions.LoadedTodos): TodosState {
  console.info('loaded todos');
  return {
    ...state,
    loading: false,
    todos: action.payload.todos,
  };
}
