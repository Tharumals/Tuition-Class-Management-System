import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../../services/alert.service';
import { PaymentService } from '../../../../services/payment.service';

@Component({
  selector: 'app-payment-pay',
  templateUrl: './payment-pay.component.html',
  styleUrls: ['./payment-pay.component.css']
})
export class PaymentPayComponent implements OnInit {


  payForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(

    private router: Router,
    private payment: PaymentService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.payForm = this.formBuilder.group({
      paymentId: ['', Validators.required],
      studentId: ['', Validators.required],
      subject: ['', Validators.required],
      grade: ['', Validators.required],
      amount: ['', Validators.required],
      month: ['', Validators.required],
      details: ['']
    });
  }
  get f() { return this.payForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.payForm.invalid) {
      return;
    }

    this.loading = true;
    this.payment.postPayment(this.payForm.value)
      .pipe(first())
      .subscribe(
        data => {
          //this.alertService.success('send message successful', true);
          alert('payment add Successfuly');
          this.router.navigate(['/admin']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
