import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../model/user';



export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}

@Injectable({
  providedIn:'root'
})

export class UserService {

  uri='http://localhost:8000'

  selectedUser: User = {
    firstName: '',
    lastName:'',
    username: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get<User[]>(`${this.uri}/users`);
  }
  getById(id: number) {
    return this.http.get(`${this.uri}/users/` + id);
  }

  register(user: User) {
    return this.http.post(`${this.uri}/users/register`, user, this.noAuthHeader);
  }

  register2(user: User) {
    return this.http.post(`${this.uri}/users2/register`, user, this.noAuthHeader);
  }


  login(authCredentials) {
    return this.http.post(`${this.uri}/users/authenticate`, authCredentials, this.noAuthHeader);
  }

  update(user: User) {
    return this.http.put(`${this.uri}/users/` , user);
  }

  delete(id: number) {
    return this.http.delete(`${this.uri}/users/` + id);
  }


  getUserProfile() {
    return this.http.get(`${this.uri}/users/profile`);
  }



  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

}