import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {

    console.log('Checking Authentication');

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      console.log('Authentication is false');
      return false;
    }
    console.log('Authentication is true');
    return true;

  }

}
