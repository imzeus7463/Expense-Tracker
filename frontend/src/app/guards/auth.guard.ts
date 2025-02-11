import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('access_token')) {
      return true; // User is authenticated
    } else {
      this.router.navigate(['/login']); // Redirect to login page
      return false;
    }
  }
}
