import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './todo.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosListComponent } from './todos-list/todos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todos: todosReducer}),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
