import { Todo } from './models/todo';
import { Action, State, StateContext } from '@ngxs/store';
import { ChangeTodoState, CreateTodo } from './todo.actions';
import { TodosService } from './todos.service';


export interface TodosStateModel {
  todos: Todo[];
}

@State<TodosStateModel>({
  name: 'todos',
  defaults: {
    todos: [
      {id: 1, text: 'foobar', done: false},
      {id: 2, text: 'foobarbaz', done: false},
      {id: 3, text: 'three', done: false},
    ],
  }
})
export class TodosState {

  public constructor(private todosService: TodosService) {
  }

  @Action(ChangeTodoState)
  changeTodoState(ctx: StateContext<TodosStateModel>, action: ChangeTodoState) {
    const state = ctx.getState();
    const copy = state.todos.slice();
    const todo = copy.find((t => t.id === action.id));
    console.info(`Changing state of todo ${todo.id} from ${todo.done} to ${!todo.done}`);
    todo.done = !todo.done;
    ctx.patchState({
      todos: copy,
    });
  }

  @Action(CreateTodo)
  createTodo(ctx: StateContext<TodosStateModel>, action: CreateTodo) {
    const todo: Todo = {
      id: Date.now(),
      text: action.text,
      done: false,
    };
    console.info(`Creating ${JSON.stringify(todo)}`);

    this.todosService.createTodo(todo)
      .subscribe((t) => {
        console.info('Created todo');
      });

    const state = ctx.getState();
    const copy = state.todos.slice();
    copy.push(todo);
    ctx.patchState({
      todos: copy,
    });
  }
}
