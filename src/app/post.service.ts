import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainMenu } from './menu';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})



export class PostService {

  constructor(private httpClient: HttpClient) { }
  httpOptions =
    new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': localStorage.getItem('token')
    });



  postFood(menu: MainMenu) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<MainMenu>(`${APIURL}/api/menu`, menu, { headers: this.httpOptions });
  }

}
