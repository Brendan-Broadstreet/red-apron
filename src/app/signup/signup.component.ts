import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

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
    this.http.post('http://localhost:4000/api/user/signup', formData).subscribe(
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
