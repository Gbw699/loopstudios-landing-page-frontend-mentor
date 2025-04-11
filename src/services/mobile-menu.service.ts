import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileMenuService {
  isOpen: WritableSignal<boolean> = signal(false);

  constructor() {}

  setIsOpen(value: boolean) {
    this.isOpen.set(value);
  }
}
