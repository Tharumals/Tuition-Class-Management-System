import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventRegisterService } from '../../../../services/eventRegister/event-register.service';

@Component({
  selector: 'app-admin-event-register-details',
  templateUrl: './admin-event-register-details.component.html',
  styleUrls: ['./admin-event-register-details.component.css']
})
export class AdminEventRegisterDetailsComponent implements OnInit {

  register = {};

  constructor(private reg: EventRegisterService, private route: ActivatedRoute) { }

  getRegisterDetails(id) {
    this.reg.getRegister(id)
      .subscribe(data => {
        console.log(data);
        this.register = data;
      });
  }

  ngOnInit() {
    this.getRegisterDetails(this.route.snapshot.params['id']);
  }

}
