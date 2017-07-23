import { Component } from '@angular/core';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']

})

export class ItemListComponent {
    values = '' ;
    addItemToList() {
        this.values += '1';
        console.log(this.values);

    }
}
