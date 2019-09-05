import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../../../services/payment.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-payments',
  templateUrl: './student-payments.component.html',
  styleUrls: ['./student-payments.component.css']
})


export class StudentPaymentsComponent implements OnInit {
  payments: any;

  constructor(private payment:PaymentService) { }

  displayedColumns = ['paymentId','grade', 'subject', 'payment','date'];
  dataSource = new PaymentDataSource(this.payment);

  ngOnInit() {
    this.payment.getPayments()
      .subscribe(res => {
        console.log(res);
        this.payments = res;
      }, err => {
        console.log(err);
      });

      
  }
 

}



export class PaymentDataSource extends DataSource<any> {
  constructor(private payment: PaymentService) {
    super()
  }

  connect() {
    return this.payment.getPayments();
  }

  disconnect() {

  }
}
