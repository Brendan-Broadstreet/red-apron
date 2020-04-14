import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  notLoggedIn(): boolean {
    if (!this.auth.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  notAdmin(): boolean {

        // is there anything in local storage
    if (localStorage.length === 0) {
      // console.log(localStorage.length);
      return true;
    } else {

      // assumes token is in local storage
      const token = localStorage.getItem('token');
      const tokenPayload = decode(token);
      // console.log(tokenPayload.admin);
      if (tokenPayload.admin !== true) {
        return true;
      } else {
        return false;
      }

    }


  }

}
