import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgComponent } from '../../../svg/svg.component';
import { SidebarStateService } from '../../state/sidebarState.service';

interface route {
  title: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'sidebar',
  imports: [RouterLink, RouterLinkActive, SvgComponent],
  templateUrl: './sidebar.component.html',
  styles: `
    :host {
      display: block;
    }
    h3{
      @apply cursor-default
    }
  `,
  host: {
    class: 'w-72',
  },
})
export class SidebarComponent {
  public routesProjects = signal<route[]>([
    {
      title: 'Proyectos',
      path: '/dashboard/proyectos/lista',
      icon: 'projectos',
    },
  ]);
}
