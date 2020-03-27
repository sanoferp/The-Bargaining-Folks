import { Injectable } from '@angular/core';
import { Product } from './product.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  //private baseUrl = 'http://localhost:9090/api/v1/employees';

  constructor(private http: HttpClient) {
    this.products = [
      { id: 'p01', item: 'name 1',des:'Description', price: 100, category:1,quality:1},
      { id: 'p02', item: 'name 2',des:'Description', price: 200, category:2,quality:2 },
      { id: 'p03', item: 'name 3',des:'Description', price: 300, category:3, quality:3 }
    ];
  }


  getProduct(id: string): Observable<Product> {
    //return this.http.get(`${this.baseUrl}/${id}`);
    return of(this.products.find(item => item.id === id));
  }

  createProduct(product: Product): Observable<Product> {
    // return this.http.post(`${this.baseUrl}`, employee);
    this.products.push(product);
    return of(product);
  }

  updateProduct(id: string, value: Product): Observable<Product> {
    // return this.http.put(`${this.baseUrl}/${id}`, value);
    var index = this.products.map(function(o) { return o.id; }).indexOf(id);
    this.products[index] = value;
    return of(value);
  }

  deleteProduct(id: string): Observable<any> {
    // return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    var product = this.products.filter(function( obj ) {
      return obj.id == id;
    });
    this.products = this.products.filter(function( obj ) {
      return obj.id !== id;
    });
    return of(product);
  }

  getProductList(): Observable<any> {
    //  return this.http.get(`${this.baseUrl}`);
    return of (this.products);
  }


}
