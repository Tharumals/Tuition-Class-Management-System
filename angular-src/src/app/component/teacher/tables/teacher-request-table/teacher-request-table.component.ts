import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../../services/request/request.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher-request-table',
  templateUrl: './teacher-request-table.component.html',
  styleUrls: ['./teacher-request-table.component.css']
})
export class TeacherRequestTableComponent implements OnInit {
  requests: any;

  constructor(private request: RequestService) { }


  displayedColumns = ['teacherId', 'date','reason'];
  dataSource = new RequestDataSource(this.request);

  ngOnInit() {
    this.request.getRequests()
      .subscribe(res => {
        console.log(res);
        this.requests = res;
      }, err => {
        console.log(err);
      });

  }
}


export class RequestDataSource extends DataSource<any> {
  constructor(private request: RequestService) {
    super()
  }

  connect() {
    return this.request.getRequests();
  }

  disconnect() {

  }
}