import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Payment} from '../../model/payment'

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  uri = 'http://localhost:8000/payments/payment';

  constructor(private http: HttpClient) { }

  addPayment(paymentId, grade, subject, payment ) {
    const obj = {
      paymentId: paymentId,
      grade: grade,
      subject: subject,
      payment: payment

     
    };
    this.http.post(`${this.uri}`, obj)
      .subscribe(res => console.log('Done'));
  }

  getPayments() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editPayment(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updatePayment(paymentId, grade, subject, payment, id) {

    const obj = {
      paymentId: paymentId,
      grade: grade,
      subject: subject,
      payment: payment
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deletePayment(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }


}
