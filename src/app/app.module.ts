import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListService } from './todo-list-service';
import { AddItemComponent } from './todo-list/add-item.component';
import { MyHeaderComponent } from './header/my-header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    AddItemComponent,
    TodoListComponent,
  ],
  imports: [AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
