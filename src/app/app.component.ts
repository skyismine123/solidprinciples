import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solid-principles';

  onClick(): void{
    console.log('Specific implementation logic for on click');
  }
}
