import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { SocialNetworkWidgetComponent } from './social-network-widget.component';
import { FacebookContentComponent } from './facebook-content.component';
import { TwitterContentComponent } from './twitter-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialNetworkWidgetComponent,
    FacebookContentComponent,
    TwitterContentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
