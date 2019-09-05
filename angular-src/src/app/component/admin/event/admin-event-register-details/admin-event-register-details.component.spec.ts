import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventRegisterDetailsComponent } from './admin-event-register-details.component';

describe('AdminEventRegisterDetailsComponent', () => {
  let component: AdminEventRegisterDetailsComponent;
  let fixture: ComponentFixture<AdminEventRegisterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventRegisterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventRegisterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
