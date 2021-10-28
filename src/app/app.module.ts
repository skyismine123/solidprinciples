import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { SocialNetworkWidgetComponent } from './social-network-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialNetworkWidgetComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
