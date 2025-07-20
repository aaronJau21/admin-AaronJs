import { Component } from '@angular/core';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-layout',
  imports: [SidebarComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class LayoutComponent { }
