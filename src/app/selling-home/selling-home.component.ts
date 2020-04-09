import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-selling-home',
  templateUrl: './selling-home.component.html',
  styleUrls: ['./selling-home.component.css']
})
export class SellingHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createListing(){
    this.router.navigateByUrl('selling');
  }

}
