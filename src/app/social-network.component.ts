import {Component} from '@angular/core';
import {WindowOpenerService} from './window-opener.service';

@Component({
  selector: 'iv-social-network',
  template: `
    <div class="social-network-widget flex-row">
      <header class="card-header">Social Network</header>
      <div class="mini-stat clearfix bg-facebook rounded flex justify-content-center">
          <span (click)="onOpen()" class="mini-stat-icon">
            <i class="fa fa-facebook fg-facebook">
            </i>
          </span>
      </div>
    </div>
  `,
  styles: [`
    /* Social network widget */
    body{
      background:#eee;
      margin-top:20px;
    }

    .rounded {
      -webkit-border-radius: 3px !important;
      -moz-border-radius: 3px !important;
      border-radius: 3px !important;
    }

    .mini-stat {
      padding: 15px;
      margin-bottom: 20px;
      display: flex;
    }

    .mini-stat-icon {
      width: 60px;
      height: 60px;
      display: inline-block;
      line-height: 60px;
      text-align: center;
      font-size: 30px;
      background: none repeat scroll 0% 0% #EEE;
      border-radius: 100%;
      float: left;
      margin-right: 10px;
      color: #FFF;
      cursor: pointer;
    }

    .mini-stat-info {
      font-size: 12px;
      padding-top: 2px;
    }

    span, p {
      color: white;
    }

    .mini-stat-info span {
      display: block;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 5px;
      margin-top: 7px;
    }

    /* ================ colors =====================*/
    .bg-facebook {
      background-color: #3b5998 !important;
      border: 1px solid #3b5998;
      color: white;
    }

    .fg-facebook {
      color: #3b5998 !important;
    }

    .bg-twitter {
      background-color: #00a0d1 !important;
      border: 1px solid #00a0d1;
      color: white;
    }

    .fg-twitter {
      color: #00a0d1 !important;
    }

    .bg-googleplus {
      background-color: #db4a39 !important;
      border: 1px solid #db4a39;
      color: white;
    }

    .fg-googleplus {
      color: #db4a39 !important;
    }

    .bg-bitbucket {
      background-color: #205081 !important;
      border: 1px solid #205081;
      color: white;
    }

    .fg-bitbucket {
      color: #205081 !important;
    }

    header {
      border: 3px dotted gray;
      background: transparent;
    }
  `
  ]
})
export class SocialNetworkComponent {

  constructor(private windowOpenerService: WindowOpenerService) { }

  onOpen(): void{
    this.windowOpenerService.open();
  }
}
