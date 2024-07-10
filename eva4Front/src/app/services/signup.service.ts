import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }


  setUser(key: string, body:string){
    localStorage.setItem(key, body)
  }

  

}
