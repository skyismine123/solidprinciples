import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FacebookContentComponent} from './facebook-content.component';
import {TwitterContentComponent} from './twitter-content.component';
import {SocialNetworkModule} from './social-network/social-network.module';

@NgModule({
  declarations: [
    AppComponent,
    FacebookContentComponent,
    TwitterContentComponent,
  ],
  imports: [
    BrowserModule,
    SocialNetworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
