import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    // const expectedRole = route.data.admin;

    const token = localStorage.getItem('token');

    // decode the token to get its payload
    const tokenPayload = decode(token);
    console.log(tokenPayload);
    console.log('Checking User Role');

    if (
      !this.auth.isAuthenticated() ||
      // tokenPayload.role !== expectedRole
      tokenPayload.admin !== expectedRole
    ) {
      this.router.navigate(['login']);
      console.log('User Role is NOT Admin');
      return false;
    } else {
      console.log('User Role is Admin');
      return true;
    }

  }

}
