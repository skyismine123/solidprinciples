import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { FacebookWidgetComponent } from './facebook-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    FacebookWidgetComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
