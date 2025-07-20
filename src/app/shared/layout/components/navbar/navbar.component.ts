import { Component } from '@angular/core';
import { ThemeButtonComponent } from "../../../theme-button/theme-button.component";
import { SvgComponent } from "../../../svg/svg.component";

@Component({
  selector: 'navbar',
  imports: [ThemeButtonComponent, SvgComponent],
  templateUrl: './navbar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class NavbarComponent { }
