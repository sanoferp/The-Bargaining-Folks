import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { Item } from '../item.entity';
import { Product } from '../product.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public items: Item[] = [];
  public total: number = 0;
  product: Product;
  products:Product[];
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
    private router: Router) { 
    }

  ngOnInit() {
    this.productService.getProductList().subscribe(res => this.products = res)
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        this.productService.getProduct(id).subscribe(res => this.product = res);
        var quantity = params['quantity'] ?  params['quantity'] : 0;
        var item: Item = {
          product: this.product,
          quantity: quantity
        }
        if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let cart: any = JSON.parse(localStorage.getItem('cart'));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product.id == id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            let item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
    });
  }


  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
    }
  }

  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

  checkout(){ 
    localStorage.clear();
    /*
    this.router.navigate(['/greeting'], { relativeTo: this.activatedRoute, queryParams: {} ,
        queryParamsHandling: 'merge', skipLocationChange: true});
        */
    this.router.navigateByUrl('/greeting');
  }

  onSubmit() {
    this.submitted = true;
    this.checkout();
  }


}

