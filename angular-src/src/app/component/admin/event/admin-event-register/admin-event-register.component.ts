import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { EventRegisterService } from '../../../../services/eventRegister/event-register.service';

@Component({
  selector: 'app-admin-event-register',
  templateUrl: './admin-event-register.component.html',
  styleUrls: ['./admin-event-register.component.css']
})
export class AdminEventRegisterComponent implements OnInit {

  registers:any;

  constructor(private register: EventRegisterService) { }


  displayedColumns = ['registerNumber', 'lectureIndex', 'date'];
  dataSource = new RegisterDataSource(this.register);

  ngOnInit() {
    this.register.getRegisters()
      .subscribe(res => {
        console.log(res);
        this.registers = res;
      }, err => {
        console.log(err);
      });

  }

  
}
export class RegisterDataSource extends DataSource<any> {
  constructor(private register: EventRegisterService) {
    super()
  }

  connect() {
    return this.register.getRegisters();
  }

  disconnect() {

  }
}



