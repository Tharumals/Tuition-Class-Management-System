import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../../../services/payment.service';

@Component({
  selector: 'app-student-payments-details',
  templateUrl: './student-payments-details.component.html',
  styleUrls: ['./student-payments-details.component.css']
})
export class StudentPaymentsDetailsComponent implements OnInit {

  payment={};

  constructor(private payments: PaymentService, private route: ActivatedRoute) { }

  getRequestDetails(id) {
    this.payments.getPayment(id)
      .subscribe(data => {
        console.log(data);
        this.payment = data;
      });
  }

  ngOnInit() {
    this.getRequestDetails(this.route.snapshot.params['id']);
  }

}
