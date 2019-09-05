import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: { errorTitle: '', errorDesc: '' };
  loginError: string;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authService.logout();
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    if (this.username.value == 'admin') {
      this.authService.login2(this.username.value, this.password.value).subscribe((data) => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
          this.router.navigate([redirect]);
        } else {
          this.loginError = 'password is incorrect.';
        }
      },
        error => this.error = error
      );
    }

    else {
      this.authService.login2(this.username.value, this.password.value).subscribe((data) => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/teacher';
          this.router.navigate([redirect]);
        } else {
          this.loginError = 'Username or password is incorrect.';
        }
      },
        error => this.error = error
      );
    }

  }

}
