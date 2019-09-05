import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RequestService} from '../../../services/request/request.service'
import { AlertService } from '../../../services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-teacher-request',
  templateUrl: './teacher-request.component.html',
  styleUrls: ['./teacher-request.component.css']
})
export class TeacherRequestComponent implements OnInit {


  requestForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private request:RequestService,
    private alertService: AlertService
    
  ) { }

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      teacherId: ['', Validators.required],
      subject: ['', Validators.required],
      reason: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  get f() { return this.requestForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.requestForm.invalid) {
      return;
    }

    this.loading = true;
    this.request.postRequest(this.requestForm.value)
      .pipe(first())
      .subscribe(
        data => {
          //this.alertService.success('send message successful', true);
          alert('successfull');
          this.router.navigate(['/teacher']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
