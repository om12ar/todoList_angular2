import { todo_list } from './todo-list';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoListService {
  getItems() {
    return todo_list;
  }
  insertItem(item: string) {
    console.log('added '  + item);
    todo_list.push(item);
  }
  deleteItem(item: string) {
    todo_list.splice(todo_list.indexOf(item), 1);
  }
}
