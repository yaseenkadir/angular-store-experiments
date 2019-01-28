import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ChangeTodoState, CreateTodo } from '../todo.actions';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos$: Observable<Todo[]> = this.store.select(state => state.todos.todos);

  todoForm: FormGroup;

  constructor(private store: Store,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.todoForm = this.fb.group({
      todo: []
    });
  }

  changeTodoDone(todoId: number) {
    this.store.dispatch(new ChangeTodoState(todoId));
  }

  createTodo() {
    const val = this.todoForm.controls.todo.value;
    this.store.dispatch(new CreateTodo(val));
  }
}
