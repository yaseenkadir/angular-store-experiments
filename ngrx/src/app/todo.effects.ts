import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodosService } from './todos.service';
import { ActionTypes, CreateTodo, LoadedTodos } from './todo.action';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class TodoEffects {

  @Effect()
  loadTodos$ = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_TODOS),
      mergeMap(() => {
          return this.todosService.getTodos()
            .pipe(map(todos => new LoadedTodos({todos: todos})));
        }
      )
    );

  @Effect({dispatch: false})
  createTodo$ = this.actions$
    .pipe(
      ofType(ActionTypes.CREATE_TODO),
      mergeMap((action: CreateTodo) => {
        return this.todosService.createTodo(action.payload.todo)
          .pipe(tap(() => console.info('Created todo')));
      })
    );

  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {
  }
}
