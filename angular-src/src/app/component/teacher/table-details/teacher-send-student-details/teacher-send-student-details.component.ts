import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherSendService } from '../../../../services/teacherToStudent/teacher-send.service';

@Component({
  selector: 'app-teacher-send-student-details',
  templateUrl: './teacher-send-student-details.component.html',
  styleUrls: ['./teacher-send-student-details.component.css']
})
export class TeacherSendStudentDetailsComponent implements OnInit {

  message={};

  constructor(private route: ActivatedRoute, private TeacherSend: TeacherSendService) { }



  getRequestDetails(id) {
    this.TeacherSend.getTeacherSend(id)
      .subscribe(data => {
        console.log(data);
        this.message = data;
      });
  }

  ngOnInit() {
    this.getRequestDetails(this.route.snapshot.params['id']);
  }

}
