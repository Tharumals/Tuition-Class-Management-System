import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Message} from '../../model/message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  uri = 'http://localhost:8000'

  selectedUser: Message = {
    firstName: '',
    lastName: '',
    registerNumber: '',
    grade:'',
    message:''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }


  register(message: Message) {
    return this.http.post(`${this.uri}/messages/message`, message, this.noAuthHeader);
  }
}
