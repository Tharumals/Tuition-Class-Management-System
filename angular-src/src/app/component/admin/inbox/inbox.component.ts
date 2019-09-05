import { Component, OnInit } from '@angular/core';
import { InboxService } from '../../../services/inbox/inbox.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  messages: any;

  constructor(private inbox: InboxService) { }
  displayedColumns = ['registerNumber','grade', 'date','message'];
  dataSource = new InboxDataSource(this.inbox);

  ngOnInit() {
    this.inbox.getMessages()
      .subscribe(res => {
        console.log(res);
        this.messages = res;
      }, err => {
        console.log(err);
      });

  }

}



export class InboxDataSource extends DataSource<any> {
  constructor(private inbox: InboxService) {
    super()
  }

  connect() {
    return this.inbox.getMessages();
  }

  disconnect() {

  }
}
