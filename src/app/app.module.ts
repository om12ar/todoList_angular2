import { AddItemComponent } from './add-item/add-item.component';
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
  ],
  imports: [AlertModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
