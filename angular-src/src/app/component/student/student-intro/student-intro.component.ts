import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-intro',
  templateUrl: './student-intro.component.html',
  styleUrls: ['./student-intro.component.css']
})
export class StudentIntroComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/intro']);
  }
}
