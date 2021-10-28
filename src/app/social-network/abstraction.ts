import {InjectionToken} from '@angular/core';

export interface Clickable {
  click(): void;
}

export const CLICKABLE_CONTENT = new InjectionToken<Clickable>('clickable content');
