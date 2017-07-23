import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user.component';
import { aboutComponent } from './component/about.component';
import {routing} from './app.route';

@NgModule({
  declarations: [
    AppComponent,UserComponent,aboutComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
