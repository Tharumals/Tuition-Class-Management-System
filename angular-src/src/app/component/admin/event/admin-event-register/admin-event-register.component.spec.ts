import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventRegisterComponent } from './admin-event-register.component';

describe('AdminEventRegisterComponent', () => {
  let component: AdminEventRegisterComponent;
  let fixture: ComponentFixture<AdminEventRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
