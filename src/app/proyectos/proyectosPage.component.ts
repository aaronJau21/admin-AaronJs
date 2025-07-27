import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductService } from './services/product.service';
import { ProjectStatus } from './enum/status-proyect.enum';

@Component({
  selector: 'app-proyectos-page',
  imports: [],
  templateUrl: './proyectosPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProyectosPageComponent {
  private readonly productService = inject(ProductService);
  public user = JSON.parse(localStorage.getItem('user') || '{}');
  public role = this.user.role.name;

  public getProjects = rxResource({
    stream: () => this.productService.getProduct(),
  });
  public getStatusLabel(status: string): string {
    return ProjectStatus[status as keyof typeof ProjectStatus] ?? status;
  }
}
