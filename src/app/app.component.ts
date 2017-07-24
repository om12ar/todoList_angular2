import {
  TodoListService
} from './todo-list-service';
import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private _todolistService: TodoListService) {} 
  
  // TODO create service 
  // TODO create form

}
