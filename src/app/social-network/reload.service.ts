import {Injectable} from '@angular/core';
import {AbstractReload} from './abstract-content';

@Injectable({
  providedIn: 'root'
})
export class ReloadService implements AbstractReload{

  constructor() { }

  reload(): void{
    console.log('reloading');
  }
}
