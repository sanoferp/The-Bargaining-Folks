import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private baseUrl = 'http://localhost:8880/api/test/listings';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createListing(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployeesSearchList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateBoughtListing(id: number, userId: number): Observable<any>{
    return this.http.put(`${this.baseUrl}/purchase/${id}`, userId);
  }

  updateCancelListing(id: number, userId: number): Observable<any>{
    return this.http.put(`${this.baseUrl}/cancel/${id}`, userId);
  }

  getUserActiveList(userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/selfactive`, userId);
  }

  getUserSoldList(userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/selfsold`, userId);
  }

  getUserBoughtList(userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/selfbought`, userId);
  }
}