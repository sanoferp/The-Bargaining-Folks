import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ListingsService } from "../listings.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Listings } from "../listings";
import { Router } from '@angular/router';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  boughtlistings : Observable<Listings[]>;
  soldlistings : Observable<Listings[]>;

  constructor(private authService: AuthService, private router: Router, private listingService: ListingsService) { }

  ngOnInit() {
    const userIdData = {idData : JSON.parse(localStorage.getItem('ACTIVE_USER')).id}; 
    this.boughtlistings = this.listingService.getUserBoughtList(userIdData);
    this.soldlistings = this.listingService.getUserSoldList(userIdData);
  }

  navigate(navigateByUrl:string) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl(navigateByUrl);
    }
  }

}