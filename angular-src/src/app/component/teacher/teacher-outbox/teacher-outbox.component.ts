import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { first } from 'rxjs/operators';
import { AlertService } from '../../../services/alert.service';
import { TeacherSendService } from '../../../services/teacherToStudent/teacher-send.service';


@Component({
  selector: 'app-teacher-outbox',
  templateUrl: './teacher-outbox.component.html',
  styleUrls: ['./teacher-outbox.component.css']
})
export class TeacherOutboxComponent implements OnInit {


  messageForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private toStudent: TeacherSendService,

  ) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      teacherId: ['', Validators.required],
      subject: ['', Validators.required],
      grade: ['', Validators.required],
      reason: ['', Validators.required],
      details: ['', Validators.required]
    });

  }
  get f() { return this.messageForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.messageForm.invalid) {
      return;
    }

    this.loading = true;
    this.toStudent.postTeacherSend(this.messageForm.value)
      .pipe(first())
      .subscribe(
        data => {
         // this.alertService.success('send message successful', true);
         alert('Successfull');
          this.router.navigate(['/teacher']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
