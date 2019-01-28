import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodosStore } from '../todos.store';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private todosStore: TodosStore,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.todoForm = this.fb.group({
      todo: []
    });

    this.todosStore.loadTodos();
  }

  changeTodoDone(todoId: number) {
    this.todosStore.changeTodoState(todoId);
  }

  createTodo() {
    const val = this.todoForm.controls.todo.value;
    this.todoForm.controls.todo.setValue('');
    const todo: Todo = {
      id: Date.now(),
      text: val,
      done: false,
    };
    this.todosStore.createTodo(todo);
  }
}
