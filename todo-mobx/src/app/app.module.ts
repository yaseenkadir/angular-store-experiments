import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { MobxAngularModule } from 'mobx-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosStore } from './todos.store';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
  ],
  imports: [
    BrowserModule,
    MobxAngularModule,
    ReactiveFormsModule,
  ],
  providers: [
    TodosStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
