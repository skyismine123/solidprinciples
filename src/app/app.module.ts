import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FacebookContentComponent} from './facebook-content.component';
import {TwitterContentComponent} from './twitter-content.component';
import {SocialNetworkModule} from './social-network/social-network.module';
import {AbstractReload, RELOADABLE_PROVIDER} from './social-network/abstract-content';

class CustomReloadingService implements AbstractReload {
  reload(): void{
    console.log('MY CUSTOM RELOAD');
  }
}

function initializeApp(): any {
    console.log('custom stuff');
}

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
  providers: [
    {
      provide: RELOADABLE_PROVIDER,
      useClass: CustomReloadingService
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
