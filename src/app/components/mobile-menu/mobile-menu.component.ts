import { Component, computed, Signal } from '@angular/core';

import { MobileMenuService } from '../../../services/mobile-menu.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  isOpen: Signal<boolean> = computed(() => {
    return this.mobileMenuService.isOpen();
  });

  constructor(private mobileMenuService: MobileMenuService) {}

  closeMenu() {
    this.mobileMenuService.setIsOpen(false);
  }
}
