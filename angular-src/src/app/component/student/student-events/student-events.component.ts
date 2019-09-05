import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventRegisterService } from '../../../services/eventRegister/event-register.service';
import { AlertService } from '../../../services/alert.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-student-events',
  templateUrl: './student-events.component.html',
  styleUrls: ['./student-events.component.css']
})
export class StudentEventsComponent implements OnInit {


  eventForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private eventRegister:EventRegisterService, 
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router
    ) { 
    
  }


  ngOnInit() {
     this.eventForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lectureIndex:['',[Validators.required,Validators.maxLength(2)]],
      lastName: ['', Validators.required],
      registerNumber: ['', Validators.required],
      telephoneNumber: ['', [Validators.maxLength(10), Validators.minLength(9)]],
    });

  }

  get f() { return this.eventForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.eventForm.invalid) {
      return;
    }

    this.loading = true;
    this.eventRegister.postRegister(this.eventForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('send message successful', true);
          alert('send message successful');
          this.router.navigate(['/student']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
