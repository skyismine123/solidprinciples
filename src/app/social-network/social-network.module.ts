import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SocialNetworkWidgetComponent} from './social-network-widget.component';



@NgModule({
  declarations: [SocialNetworkWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [SocialNetworkWidgetComponent]
})
export class SocialNetworkModule { }
