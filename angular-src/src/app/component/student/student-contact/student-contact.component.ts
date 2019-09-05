import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
import { first } from 'rxjs/operators';
import { MessageService } from '../../../services/message/message.service';

@Component({
  selector: 'app-student-contact',
  templateUrl: './student-contact.component.html',
  styleUrls: ['./student-contact.component.css']
})
export class StudentContactComponent implements OnInit {


  contactForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private messageService:MessageService
  ) { }

  ngOnInit() {
     this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      registerNumber: ['', Validators.required],
      grade: [ '', [Validators.required, Validators.maxLength(2)]],
      message: [''],
    });

  }

  get f() { return this.contactForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    this.messageService.register(this.contactForm.value)
      .pipe(first())
      .subscribe(
        data => {
          //this.alertService.success('send message successful', true);
          
          this.router.navigate(['/student']);
          alert('send message successful');
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}


