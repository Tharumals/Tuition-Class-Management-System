import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewEventComponent } from './admin-new-event.component';

describe('AdminNewEventComponent', () => {
  let component: AdminNewEventComponent;
  let fixture: ComponentFixture<AdminNewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
