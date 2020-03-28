import { Injectable } from '@angular/core';
import { Subject } from 'rxjs' //Look into rxjs

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product){
    console.log(product)
    this.subject.next(product) //Triggering an event
  }

  getMsg(){
    return this.subject.asObservable()
  }
}
