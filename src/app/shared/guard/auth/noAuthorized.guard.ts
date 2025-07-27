import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const noAuthorizedGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const router = inject(Router);

  if (token && user) {
    router.navigateByUrl('/dashboard/home');
    return false;
  }

  return true;
};
