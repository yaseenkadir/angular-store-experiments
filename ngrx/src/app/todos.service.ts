import { Injectable } from '@angular/core';
import { Todo } from './models/todo';
import { interval, Observable, of } from 'rxjs';
import { delay, map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [
    {id: 1, text: 'foobar', done: false},
    {id: 2, text: 'foobarbaz', done: false},
    {id: 3, text: 'three', done: false},
  ];

  constructor() {
  }

  public getTodos(): Observable<Todo[]> {
    return of(this.todos)
      .pipe(
        tap(() => console.info('fooboojooboo')),
        delay(2000),
      );
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return of(todo).pipe(delay(1000));
  }
}
