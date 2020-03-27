import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Product } from '../product.entity';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  categories: any = [ {id:1,name:'Appliances'}, {id:2,name:'Clothing'}, 
    {id:3,name:'Electronics'}, {id:4, name:'Misc'}]
  qualities: any = [{id:1,name:'New'}, {id:2,name:'Used-like new'}, {id:3,name:'Used - Good'},
   {id:4,name:'Used - fair'}]

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, private router: Router, public formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id:['', Validators.required],
      item: ['', Validators.required],
      des: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      quality: ['', Validators.required]

    });

  }
  get formControls() { return this.loginForm.controls; }

  
    save() {
      this.productService.createProduct(this.product)
        .subscribe(data => console.log(data), error => console.log(error));
      this.product = new Product();
      this.gotoList();
    }
    onSubmit() {
      this.submitted = true;
      this.save();
    }
    gotoList(){
      this.router.navigateByUrl('/buying');
    }



  }

