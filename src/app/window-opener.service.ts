import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowOpenerService {

  constructor() { }

  open(): void {
    window.open('https://www.facebook.com');
    console.log('complex logic');
  }
}
