import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../../services/student/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student = {};
  constructor(private st: StudentService, private route: ActivatedRoute) { }


  getStudentDetails(id) {
    this.st.getStudent(id)
      .subscribe(data => {
        console.log(data);
        this.student = data;
      });
  }



  ngOnInit() {
     this.getStudentDetails(this.route.snapshot.params['id']);
  }

}
