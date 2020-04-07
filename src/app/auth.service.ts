import { Injectable } from '@angular/core';
import { User } from './user';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn:boolean = false;

  public login(userInfo: User){
    localStorage.setItem('ACTIVE_USER', JSON.stringify(userInfo));
    localStorage.setItem('ACCESS_TOKEN', "access_token");
    this.isUserLoggedIn = true;
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('ACTIVE_USER');
    localStorage.clear();
    this.isUserLoggedIn = false;
  }

  public updateLoggedInUser(userInfo: User){
    localStorage.setItem('ACTIVE_USER', JSON.stringify(userInfo));
  }

  
}
