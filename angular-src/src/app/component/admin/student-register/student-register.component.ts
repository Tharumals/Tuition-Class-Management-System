import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { StudentService } from '../../../services/student/student.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
 
  studentForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private st: StudentService, 
    private formBuilder: FormBuilder,
    private alertService:AlertService) { }

  ngOnInit() {

    this.studentForm = this.formBuilder.group({
      studentId: ['', Validators.required],
      date: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender:['',Validators.required],
      school:['',Validators.required],
      address:['',Validators.required],
      phoneNumber:['',Validators.required],
      email:['',Validators.required],
      details:[''],
      grade: ['', Validators.required],

    });
  }

  get f() {return this.studentForm.controls}
 

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.studentForm.invalid) {
      return;
    }

    this.loading = true;
    this.st.postStudent(this.studentForm.value)
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
