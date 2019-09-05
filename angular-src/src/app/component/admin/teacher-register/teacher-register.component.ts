import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../../../services/teacher/teacher.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  teacherForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private teacher: TeacherService,
    private formBuilder: FormBuilder,
    private alertService: AlertService

  ) { }

  ngOnInit() {

    this.teacherForm = this.formBuilder.group({
      teacherId: ['', Validators.required],
      date: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      nic: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],

    });
  }


  get f() { return this.teacherForm.controls }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.teacherForm.invalid) {
      return;
    }

    this.loading = true;
    this.teacher.postTeacher(this.teacherForm.value)
      .pipe(first())
      .subscribe(
        data => {
          //this.alertService.success('send message successful', true);
          alert('successfully registered');
          this.router.navigate(['/admin-account']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
