import { Routes } from '@angular/router';
import { ProyectosPageComponent } from './proyectosPage.component';

const proyectosRoutes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
  {
    path: 'lista',
    component: ProyectosPageComponent,
  },
];

export default proyectosRoutes;
