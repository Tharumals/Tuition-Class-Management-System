import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../../../services/response/response.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher-response',
  templateUrl: './teacher-response.component.html',
  styleUrls: ['./teacher-response.component.css']
})
export class TeacherResponseComponent implements OnInit {

  responses:any;

  constructor(private response: ResponseService) { }


  displayedColumns = [ 'date', 'reason'];
  dataSource = new ResponseDataSource(this.response);
  
  ngOnInit() {
    this.response.getResponses()
      .subscribe(res => {
        console.log(res);
        this.responses = res;
      }, err => {
        console.log(err);
      });

  }

}



export class ResponseDataSource extends DataSource<any> {
  constructor(private response: ResponseService) {
    super()
  }

  connect() {
    return this.response.getResponses();
  }

  disconnect() {

  }
}
