import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { RequestService } from '../../../services/request/request.service';

@Component({
  selector: 'app-account-issues',
  templateUrl: './account-issues.component.html',
  styleUrls: ['./account-issues.component.css']
})
export class AccountIssuesComponent implements OnInit {
  messages: any;

  constructor(private log: RequestService) { }

  displayedColumns = ['role','registerNumber'];
  dataSource = new InboxDataSource(this.log);

  ngOnInit() {
    this.log.getLogIns()
      .subscribe(res => {
        console.log(res);
        this.messages = res;
      }, err => {
        console.log(err);
      });

  }

}


export class InboxDataSource extends DataSource<any> {
  constructor(private log: RequestService) {
    super()
  }

  connect() {
    return this.log.getLogIns();
  }

  disconnect() {

  }
}
