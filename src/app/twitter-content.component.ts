import { Component, OnInit } from '@angular/core';
import {Clickable} from './facebook-content.component';
import {CLICKABLE_CONTENT} from './social-network/abstract-content';

@Component({
  selector: 'iv-twitter-content',
  template: `
    <p>
      twitter-content works!
    </p>
  `,
  styles: [
  ],
  providers: [
    {
      provide: CLICKABLE_CONTENT,
      useExisting: TwitterContentComponent
    }
  ]
})
export class TwitterContentComponent implements Clickable {

  constructor() { }

  click(): void {
    console.log('CLICKED twitter');
  }

}
