import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { EventService } from '../../../../services/event/event.service';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-admin-new-event',
  templateUrl: './admin-new-event.component.html',
  styleUrls: ['./admin-new-event.component.css']
})
export class AdminNewEventComponent implements OnInit {




  eventForm: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private router: Router,
    private event: EventService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      eventId: ['', Validators.required],
      eventName: ['', Validators.required],
      subject: ['', Validators.required],
      lecturer: ['', Validators.required],
      grade: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      venue: ['', Validators.required],
      details: ['', Validators.required]
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
    this.event.postEvent(this.eventForm.value)
      .pipe(first())
      .subscribe(
        data => {
          //this.alertService.success('send message successful', true);
          alert('Add Event Successfully');
          this.router.navigate(['/admin']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
