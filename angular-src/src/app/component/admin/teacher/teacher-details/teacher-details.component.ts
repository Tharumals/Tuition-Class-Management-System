import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../../../services/teacher/teacher.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  teacher={};

  constructor(private route: ActivatedRoute, private tch: TeacherService,) { }



  getTeacherDetails(id) {
    this.tch.getTeacher(id)
      .subscribe(data => {
        console.log(data);
        this.teacher = data;
      });
  }


   ngOnInit() {
     this.getTeacherDetails(this.route.snapshot.params['id']);
  }


}
