import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ListingsService } from "../listings.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Listings } from "../listings";
import { Router } from '@angular/router';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-selling-home',
  templateUrl: './selling-home.component.html',
  styleUrls: ['./selling-home.component.css']
})
export class SellingHomeComponent implements OnInit {

  listings: Observable<Listings[]>;

  constructor(private router: Router, private listingService: ListingsService) { }

  ngOnInit(): void {
    const userIdData = {idData : JSON.parse(localStorage.getItem('ACTIVE_USER')).id}; 
    this.listings = this.listingService.getUserActiveList(userIdData);
  }

  cancelItem(itemId:number){
    
    const userIdData = {idData : JSON.parse(localStorage.getItem('ACTIVE_USER')).id}; 
    this.listingService.updateCancelListing(itemId, userIdData).subscribe(data => {
      if (data){
        this.ngOnInit();
      }
    });
    
  }

  createListing(){
    this.router.navigateByUrl('selling');
  }

}
