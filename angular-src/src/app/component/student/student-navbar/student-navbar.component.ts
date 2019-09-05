import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router){ }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/intro']);
  }
}
