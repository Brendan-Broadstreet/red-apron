import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('token');
  }

  login() {
    const formData = {
      user: {
        email: this.email,
        password: this.password
      }
    };
    this.http.post(`${APIURL}/api/user/login`, formData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res['sessionToken']);

        const token = localStorage.getItem('token');
        const tokenPayload = decode(token);

        if (tokenPayload.admin === true) {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['shopping-cart']);
        }

      },
      err => {
        console.log(err);
      }
    );
  }

}
