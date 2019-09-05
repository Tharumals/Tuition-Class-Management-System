import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherSendService } from '../../../../services/teacherToStudent/teacher-send.service';


@Component({
  selector: 'app-student-messsage-details',
  templateUrl: './student-messsage-details.component.html',
  styleUrls: ['./student-messsage-details.component.css']
})
export class StudentMesssageDetailsComponent implements OnInit {

  message = {};

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
