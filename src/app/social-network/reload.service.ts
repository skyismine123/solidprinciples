import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  constructor() { }

  reload(): void{
    console.log('reloading');
  }
}
