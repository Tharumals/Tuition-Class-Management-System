import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { PaymentService } from '../../../../services/payment.service';


@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {

  payments: any;

  constructor(private payment:PaymentService) { }

  displayedColumns = ['paymentId', 'studentId', 'subject', 'grade', 'month'];
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
