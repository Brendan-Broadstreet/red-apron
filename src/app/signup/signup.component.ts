import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  challengequestion: string;
  admin: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  signup() {
    const formData = {
      user: {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        email: this.email,
        password: this.password,
        challengequestion: this.challengequestion
      }
    };
    this.http.post(`${APIURL}/api/user/signup`, formData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res['sessionToken']);
        this.router.navigate(['shopping-cart']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
