import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseService } from '../../../../services/response/response.service';

@Component({
  selector: 'app-teacher-response-details',
  templateUrl: './teacher-response-details.component.html',
  styleUrls: ['./teacher-response-details.component.css']
})
export class TeacherResponseDetailsComponent implements OnInit {

  response={};

  constructor(private route: ActivatedRoute, private rs: ResponseService) { }

  getResponseDetails(id) {
    this.rs.getResponse(id)
      .subscribe(data => {
        console.log(data);
        this.response = data;
      });
  }


  ngOnInit() {
    this.getResponseDetails(this.route.snapshot.params['id']);
  }

}
