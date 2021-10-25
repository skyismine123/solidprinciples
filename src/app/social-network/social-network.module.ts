import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialNetworkWidgetComponent} from './social-network-widget.component';
import {RELOADABLE_PROVIDER} from './abstract-content';
import {ReloadService} from './reload.service';


@NgModule({
  declarations: [SocialNetworkWidgetComponent],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide: RELOADABLE_PROVIDER,
      useClass: ReloadService
    }
  ],
  exports: [SocialNetworkWidgetComponent]
})
export class SocialNetworkModule { }
