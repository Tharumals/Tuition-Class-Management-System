import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { RequestService } from '../../../services/request/request.service';

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrls: ['./admin-request.component.css']
})
export class AdminRequestComponent implements OnInit {
  requests: any;

  constructor(private request: RequestService) { }

  displayedColumns = ['teacherId',  'date','reason'];
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
