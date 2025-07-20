import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styles: `
    :host {
      display: block;
    }
    h3{
      @apply cursor-default
    }
  `,
  host:{
    class:'w-72'
  }
})
export class SidebarComponent { }
