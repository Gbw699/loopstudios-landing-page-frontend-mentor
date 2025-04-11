import { Component } from '@angular/core';
import { MobileMenuService } from '../../../services/mobile-menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private mobileMenuService: MobileMenuService) {}

  openMenu() {
    this.mobileMenuService.setIsOpen(true);
  }
}
