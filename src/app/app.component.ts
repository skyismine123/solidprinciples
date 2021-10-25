import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solid-principles';

  onOpen(): void{
    window.open('https://www.facebook.com');
  }
}
