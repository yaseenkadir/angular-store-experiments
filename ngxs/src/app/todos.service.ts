import { Injectable } from '@angular/core';
import { Todo } from './models/todo';
import { interval, Observable, of } from 'rxjs';
import { delay, map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[];

  constructor() {
  }

  public getTodos(): Observable<Todo[]> {
    return interval(2_000)
      .pipe(
        take(1),
        map(() => this.todos),
      );
  }

  public createTodo(todo: Todo): Observable<Todo> {
    console.info('creating the thing blah');
    return of(todo).pipe(delay(1000));
  }
}
