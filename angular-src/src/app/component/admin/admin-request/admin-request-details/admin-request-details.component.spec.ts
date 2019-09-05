import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestDetailsComponent } from './admin-request-details.component';

describe('AdminRequestDetailsComponent', () => {
  let component: AdminRequestDetailsComponent;
  let fixture: ComponentFixture<AdminRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
