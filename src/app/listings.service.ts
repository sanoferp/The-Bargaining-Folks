import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private baseUrl = 'http://localhost:8880/api/test/listings';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


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
    return this.http.get(`${this.baseUrl}/active`);
  }

  getEmployeesSearchList(search: string): Observable<any> {
    alert("I am here!" + search);
    return this.http.get(`${this.baseUrl}/search/${search}`);
  }

  updateBoughtListing(id: number, userIdData): Observable<any>{
    alert("id"+id+"yoyoyoyooy" + userIdData.idData);
    return this.http.put(`${this.baseUrl}/purchase/${id}`, userIdData);
  }

  updateCancelListing(id: number, userIdData): Observable<any>{
    return this.http.put(`${this.baseUrl}/cancel/${id}`, userIdData);
  }

  getUserActiveList(userIdData): Observable<any> {
    return this.http.post(`${this.baseUrl}/selfactive`, userIdData);
  }

  getUserSoldList(userIdData): Observable<any> {
    return this.http.post(`${this.baseUrl}/selfsold`, userIdData);
  }

  getUserBoughtList(userIdData): Observable<any> {
    return this.http.post(`${this.baseUrl}/selfbought`, userIdData);
  }
}