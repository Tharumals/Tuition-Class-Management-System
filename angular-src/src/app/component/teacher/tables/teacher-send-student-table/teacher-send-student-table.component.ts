import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { TeacherSendService } from '../../../../services/teacherToStudent/teacher-send.service';

@Component({
  selector: 'app-teacher-send-student-table',
  templateUrl: './teacher-send-student-table.component.html',
  styleUrls: ['./teacher-send-student-table.component.css']
})
export class TeacherSendStudentTableComponent implements OnInit {

  messages: any;

  constructor(private tts: TeacherSendService) { }

  displayedColumns = ['subject','date','reason'];
  dataSource = new MessageDataSource(this.tts);

 

    ngOnInit() {
      this.tts.getTeacherSends()
        .subscribe(res => {
          console.log(res);
          this.messages = res;
        }, err => {
          console.log(err);
        });

  }


}



export class MessageDataSource extends DataSource<any> {
  constructor(private tts: TeacherSendService) {
    super()
  }

  connect() {
    return this.tts.getTeacherSends();
  }

  disconnect() {

  }
}
