import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ListingsService } from "../listings.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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

  searchForm: FormGroup;
  newList: boolean = true; //Test case for 
  searchTerm: string = null;
  constructor(private formBuilder:FormBuilder, private authService: AuthService, private listingService: ListingsService, private router: Router) { }

  ngOnInit() {

    if(this.newList){
    this.listings = this.listingService.getEmployeesList(); //Returns all results by default
    }
    else{
      this.listings = this.listingService.getEmployeesSearchList(this.searchTerm); //Return search results
    }
    

    this.searchForm = this.formBuilder.group({
      search: ['']
    })

  }
  get formControls() { return this.searchForm.controls; }


  /*
  navigate(navigateByUrl:string) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl(navigateByUrl);
    }
  }*/

  onSubmit() {
    alert("Search Result" + this.searchForm.controls.search.value);

    this.newList = false;
    this.onRun();
  }

  onRun(){


    this.listingService.getEmployeesSearchList(this.searchForm.controls.search.value).subscribe(data  => {
      
      if(data){ //On success update current user in localstorage
        
        //this.authService.updateLoggedInUser(data);

        //this.listings=data;
        this.searchTerm = this.searchForm.controls.search.value;
        
        //this.router.navigateByUrl('/marketplace'); //Maybe just reload this page? //START HERE
        this.ngOnInit();
      }
      else { //Unsuccessful update
        alert("Update was not processed");
      }
    });
  }

  onReset(){
    this.newList = true;
    this.ngOnInit();
  }

}
