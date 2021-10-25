import {InjectionToken} from '@angular/core';
import {Clickable} from '../facebook-content.component';

export abstract class AbstractReload {
  abstract reload(): void;
}
export const CLICKABLE_CONTENT = new InjectionToken<Clickable>('Clickable content');
export const RELOADABLE_PROVIDER = new InjectionToken<AbstractReload>('Reloadable provider');
