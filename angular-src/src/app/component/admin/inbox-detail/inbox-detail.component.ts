import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InboxService } from '../../../services/inbox/inbox.service';

@Component({
  selector: 'app-inbox-detail',
  templateUrl: './inbox-detail.component.html',
  styleUrls: ['./inbox-detail.component.css']
})
export class InboxDetailComponent implements OnInit {
  message = {};

  constructor(private route: ActivatedRoute, private inbox: InboxService) { }


  getMessageDetails(id) {
    this.inbox.getMessage(id)
      .subscribe(data => {
        console.log(data);
        this.message = data;
      });
  }

  ngOnInit() {
    this.getMessageDetails(this.route.snapshot.params['id']);
  }

}
