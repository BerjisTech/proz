import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Credentials } from '../../interfaces/user/credentials';
import uuid from 'uuid';
import { faker } from '@faker-js/faker';
import { User } from '../../interfaces/user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Your Rails API URL

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  register(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, {user: credentials});
  }

  login(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/sign_in`, {user: credentials});
  }

  logout(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/sign_out`);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  generateDummyUser(): User {
    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      dateOfBirth: faker.date.past().toString(),
      profileImage: faker.image.avatar(),
      dateJoined: faker.date.past().toString(),
      lastLogin: faker.date.past().toString(),
      isStaff: faker.datatype.boolean(),
      isActive: faker.datatype.boolean(),
      isSuperuser: faker.datatype.boolean(),
      isVerified: faker.datatype.boolean(),
      isAnonymous: faker.datatype.boolean(),
      isModerator: faker.datatype.boolean(),
      isSuspended: faker.datatype.boolean(),
      isBanned: faker.datatype.boolean(),
      isDeleted: faker.datatype.boolean(),
      isBlocked: faker.datatype.boolean(),
      isReported: faker.datatype.boolean(),
      isMuted: faker.datatype.boolean(),
    };
  }

}