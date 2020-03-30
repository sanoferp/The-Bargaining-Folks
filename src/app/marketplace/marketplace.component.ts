import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ListingsService } from "../listings.service";
import { Listings } from "../listings";
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  listings: Observable<Listings[]>;

  constructor(private listingService: ListingsService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.listings = this.listingService.getEmployeesList();
  }

}
