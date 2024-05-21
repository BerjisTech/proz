import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Your Rails API URL

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/sign_in`, credentials);
  }

  logout(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/sign_out`);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }
}