import { Component, inject } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SidebarStateService } from './state/sidebarState.service';

@Component({
  selector: 'app-layout',
  imports: [SidebarComponent, NavbarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class LayoutComponent {
  public readonly sidebarStateService = inject(SidebarStateService);
}
