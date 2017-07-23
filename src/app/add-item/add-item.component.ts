import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']

})

export class AddItemComponent {
    @Output() itemAdded = new EventEmitter<string>();
    addItem(item: string) {
        console.log('a' + item);
        this.itemAdded.emit(item);
    }
}
