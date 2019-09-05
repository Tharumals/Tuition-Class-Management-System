import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../../../services/payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  payment={};

  constructor(
    private route: ActivatedRoute, 
    private pay: PaymentService
  ) { }



  getPaymentDetails(id) {
    this.pay.getPayment(id)
      .subscribe(data => {
        console.log(data);
        this.payment = data;
      });
  }

  ngOnInit() {
    this.getPaymentDetails(this.route.snapshot.params['id']);
  }

}
