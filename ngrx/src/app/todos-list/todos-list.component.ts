import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ChangeTodoState, CreateTodo, LoadTodos } from '../todo.action';
import { TodosState } from '../todo.reducer';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos$: Observable<Todo[]> = this.store.select(state => state.todos.todos);
  loading$: Observable<boolean> = this.store.select(state => state.todos.loading);

  todoForm: FormGroup;

  constructor(private store: Store<{ todos: TodosState }>,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.todoForm = this.fb.group({
      todo: []
    });

    this.store.dispatch(new LoadTodos());
  }

  changeTodoDone(todoId: number) {
    this.store.dispatch(new ChangeTodoState({id: todoId}));
  }

  createTodo() {
    const val = this.todoForm.controls.todo.value;
    this.todoForm.controls.todo.setValue('');
    const todo: Todo = {
      id: Date.now(),
      text: val,
      done: false,
    };
    this.store.dispatch(new CreateTodo({todo: todo}));
  }
}
