import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private http: HttpClient) { }

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
      },
      err => {
        console.log(err);
      }
    );
  }

}
