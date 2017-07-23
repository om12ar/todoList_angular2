import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  itemList = new Array<string>();
  onItemAdded(item: string) {
            console.log(item);

    this.itemList.push(item);
  }
}
