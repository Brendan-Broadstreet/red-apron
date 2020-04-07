import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainMenu } from './menu';

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
    return this.httpClient.post<MainMenu>('http://localhost:4000/api/menu', menu, { headers: this.httpOptions });
  }

  // postEntreeComboMenu(combomenu: EntreeMenu) {
  //   // tslint:disable-next-line:max-line-length
  //   return this.httpClient.post<MainMenu>('http://localhost:4000/api/combo', combomenu, { headers: this.httpOptions });
  // }

  // postSideItemComboMenu(combomenu: SideMenu) {
  //   // tslint:disable-next-line:max-line-length
  //   return this.httpClient.post<MainMenu>('http://localhost:4000/api/combo', combomenu, { headers: this.httpOptions });
  // }
}
