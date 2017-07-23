import { DataService } from './data.service';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
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
    ItemListComponent,
  ],
  imports: [AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
