import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  navigate(navigateByUrl:string) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl(navigateByUrl);
    }
  }
  edit() {
    this.navigate('edit');
  }

  buying() {
    this.navigate('buying');
  }

  selling() {
    this.navigate('selling');
  }

  logout() {
    this.navigate('login');
    this.authService.logout();
  }

}