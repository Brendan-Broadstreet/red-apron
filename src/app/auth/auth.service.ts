import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {

    // console.log('Checking token expiration');

    const token = localStorage.getItem('token');

    // console.log('Token not expired is ' + !this.jwtHelper.isTokenExpired(token));

    // check whether the token is expired and return
    //  true or false
    return !this.jwtHelper.isTokenExpired(token);

  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

}
