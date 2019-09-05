import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventTableComponent } from './admin-event-table.component';

describe('AdminEventTableComponent', () => {
  let component: AdminEventTableComponent;
  let fixture: ComponentFixture<AdminEventTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
