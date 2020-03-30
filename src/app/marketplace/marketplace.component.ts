import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ListingsService } from "../listings.service";
import { Listings } from "../listings";
import { Router } from '@angular/router';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  listings: Observable<Listings[]>;

  constructor(private authService: AuthService, private listingService: ListingsService, private router: Router) { }

  ngOnInit() {
    this.listings = this.listingService.getEmployeesList();
  }

  navigate(navigateByUrl:string) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl(navigateByUrl);
    }
  }
}
