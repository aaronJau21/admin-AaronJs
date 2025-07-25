import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  {
    path: 'auth/login',
    component: AuthComponent,
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./shared/layout/layout.component'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./dashboard/dashboard.component'),
      },
      {
        path: 'proyectos',
        loadChildren: () => import('./proyectos/proyectos.routes'),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full',
  },
];
