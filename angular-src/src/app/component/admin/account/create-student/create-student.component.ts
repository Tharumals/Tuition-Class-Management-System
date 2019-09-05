import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../../services/alert.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {


  studentForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private us:UserService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      
    });
  }


  get f() { return this.studentForm.controls }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.studentForm.invalid) {
      return;
    }

    this.loading = true;
    this.us.register(this.studentForm.value)
      .pipe(first())
      .subscribe(
        data => {
          //this.alertService.success('send message successful', true);
          alert('Account Create successfully');
          this.router.navigate(['/admin']);
          console.log('data');
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
