import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  let login = false;
  authService.getAuth().subscribe((value) => (login = value));
  if (!login) {
    router.navigateByUrl('login');
    return login;
  }
  return login;
};
