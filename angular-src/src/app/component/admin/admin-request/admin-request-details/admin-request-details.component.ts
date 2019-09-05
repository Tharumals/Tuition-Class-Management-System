import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../../../services/request/request.service';

@Component({
  selector: 'app-admin-request-details',
  templateUrl: './admin-request-details.component.html',
  styleUrls: ['./admin-request-details.component.css']
})
export class AdminRequestDetailsComponent implements OnInit {

  request = {};

  constructor(private route: ActivatedRoute, private rq: RequestService) { }



  getRequestDetails(id) {
    this.rq.getRequest(id)
      .subscribe(data => {
        console.log(data);
        this.request = data;
      });
  }


  ngOnInit() {
    this.getRequestDetails(this.route.snapshot.params['id']);
  }


}
