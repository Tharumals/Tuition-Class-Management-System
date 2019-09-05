import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router} from '@angular/router'
import { first } from 'rxjs/operators';
import { RequestService } from '../../services/request/request.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registerForm:FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private alertService: AlertService,
    private log: RequestService,
    ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      role: ['', Validators.required],
      registerNumber: ['', Validators.required],
      
    });
  }
  
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.log.postLogIn(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Message send successful', true);
          this.router.navigate(['/intro']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
