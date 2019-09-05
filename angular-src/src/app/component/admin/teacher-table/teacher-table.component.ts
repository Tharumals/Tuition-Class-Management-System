import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher/teacher.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent implements OnInit {

  teachers: any;


  displayedColumns = ['teacherId','firstName', 'lastName', 'subject'];
  dataSource = new TeacherDataSource(this.teacher);



  constructor(private teacher:TeacherService) { }

  ngOnInit() {
    this.teacher.getTeachers()
      .subscribe(res => {
        console.log(res);
        this.teacher = res;
      }, err => {
        console.log(err);
      });
  }


}



export class TeacherDataSource extends DataSource<any> {
  constructor(private teacher: TeacherService) {
    super()
  }

  connect() {
    return this.teacher.getTeachers();
  }

  disconnect() {

  }
}
