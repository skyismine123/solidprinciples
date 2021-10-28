import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacebookOpenerService {

  constructor() { }

  click(): void {
    console.log('Specific implementation logic for on click');
  }
}
