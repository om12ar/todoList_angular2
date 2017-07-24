import { Component, Output, EventEmitter } from '@angular/core';
import {TodoListService} from '../todo-list-service';
@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./todo-list.css']

})

export class AddItemComponent {
    constructor(private _todolistService: TodoListService) {} 
    addItem(item: string) {
        this._todolistService.insertItem(item);
    }
/*     @Output() itemAdded = new EventEmitter<string>();
    addItem(item: string) {
        console.log('a' + item);
        this.itemAdded.emit(item);
    } */
}
