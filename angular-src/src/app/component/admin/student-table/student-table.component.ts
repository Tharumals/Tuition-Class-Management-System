import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student/student.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  students: any;


  displayedColumns = ['studentId','firstName', 'lastName','grade'];
  dataSource = new StudentDataSource(this.student);


  constructor(private student:StudentService) { }

  ngOnInit() {
    this.student.getStudents()
      .subscribe(res => {
        console.log(res);
        this.students = res;
      }, err => {
        console.log(err);
      });
  }

}



export class StudentDataSource extends DataSource<any> {
  constructor(private student: StudentService) {
    super()
  }

  connect() {
    return this.student.getStudents();
  }

  disconnect() {

  }
}