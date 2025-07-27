import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { authorizedGuard } from './shared/guard/auth/authorized.guard';
import { noAuthorizedGuard } from './shared/guard/auth/noAuthorized.guard';

export const routes: Routes = [
  {
    path: 'auth/login',
    component: AuthComponent,
    canActivate: [noAuthorizedGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./shared/layout/layout.component'),
    canActivate: [authorizedGuard],
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
