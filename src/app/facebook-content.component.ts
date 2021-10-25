import { Component, OnInit } from '@angular/core';
import {CLICKABLE_CONTENT} from './social-network/abstract-content';

export interface Clickable {
  click(): void;
}

@Component({
  selector: 'iv-facebook-content',
  template: `
    <div class="mini-stat clearfix bg-facebook rounded">
      <span class="mini-stat-icon" (click)="click()"><i class="fa fa-facebook fg-facebook"></i></span>
      <div class="mini-stat-info">
        <span>5,762</span>
      </div>
    </div>
  `,
  styles: [
    `/* Social network widget */
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
      justify-content: center;
      align-items: center;
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
      color: #1976d2;
      border: 3px dotted #1976d2;
      background: transparent;
      padding: 10px;
    }`
  ],
  providers: [ {
    provide: CLICKABLE_CONTENT,
    useExisting: FacebookContentComponent
  }]
})
export class FacebookContentComponent implements  Clickable {

  constructor() { }

  click(): void {
    console.log('CLICKED facebook');
  }
}
