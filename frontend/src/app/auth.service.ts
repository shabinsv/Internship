import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  log(){
    
  }
  loggedIn(){

    return !!localStorage.getItem("token");
  }
  getToken(){

    return localStorage.getItem("token");
  }

  StudentloggedIn(){
    var x=localStorage.getItem('opt')
    if(x=='student'){
      return true
    }
    else{
      return false
    }
   }
}
