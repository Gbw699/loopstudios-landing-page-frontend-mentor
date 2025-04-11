import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { BackgroundComponent } from './components/background/background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MobileMenuComponent,
    BackgroundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'loopstudios-landing-page-frontend-mentor';
}
