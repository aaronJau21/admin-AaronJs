import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  host:{
    class:'w-36'
  }
})
export class SidebarComponent { }
