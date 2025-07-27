import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const authorizedGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const router = inject(Router);

  if (token && user) {
    return true;
  }

  router.navigateByUrl('/auth/login');
  return false;
};
