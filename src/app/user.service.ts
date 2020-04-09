import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8880/api/test/users';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user, this.options);
  }

  updateUser(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value, this.options);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  checkUserLogin(loginInfo): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginInfo);
  }
}