import { Injectable } from '@angular/core';
import { Todo } from './models/todo';
import * as mobx from 'mobx-angular';
import { TodosService } from './todos.service';

@Injectable()
export class TodosStore {
  @mobx.observable todos: Todo[] = [];
  @mobx.observable loading: boolean = false;

  constructor(private todosService: TodosService) {
  }

  @mobx.action createTodo(todo: Todo) {
    console.info(`Creating ${JSON.stringify(todo)}`);
    this.todos.push(todo);

    this.todosService.createTodo(todo)
      .subscribe(() => console.info('created todo'));
  }

  @mobx.action loadTodos() {
    this.loading = true;

    this.todosService.getTodos()
      .subscribe(todos => {
        this.loadedTodos(todos);
      });
  }

  @mobx.action loadedTodos(todos: Todo[]) {
    this.loading = false;
    this.todos = todos;
  }

  @mobx.action changeTodoState(todoId: number) {
    const todo = this.todos.find(t => t.id === todoId);
    console.info(`Changing state of todo ${todo.id} from ${todo.done} to ${!todo.done}`);
    todo.done = !todo.done;
  }
}
