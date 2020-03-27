import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { Item } from '../item.entity';
import { Product } from '../product.entity';


@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {

  public products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.productService.getProductList().subscribe(res => this.products = res);
    
	}

}
