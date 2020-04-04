import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-i-navbar',
  templateUrl: './i-navbar.component.html',
  styleUrls: ['./i-navbar.component.css']
})
export class INavbarComponent implements OnInit {

  //userLoggedIn:boolean = this.checkLoggedIn();

  ngOnInit(): void {
  }
  
  constructor(private authService: AuthService, private router: Router) { }


  checkLoggedIn(){
    alert("loggedin: " + (localStorage.getItem('ACCESS_TOKEN') !== null ))
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }


  logUserOut(){
    this.authService.logout();
  }

}
