import {
  Component,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import {
  TodoListService
} from '../todo-list-service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.css']

})

export class TodoListComponent implements OnInit {
  itemList = Array < string > ();
  constructor(private _todolistService: TodoListService) {}

  ngOnInit() {
    this.itemList = this._todolistService.getItems();
  }
/*     deleteItem(item: string) {
        console.log('removed ' + item);
        
        this._todolistService.deleteItem(item);
    }
 */
}
