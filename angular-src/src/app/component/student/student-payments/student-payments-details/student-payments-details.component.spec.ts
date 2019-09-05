import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPaymentsDetailsComponent } from './student-payments-details.component';

describe('StudentPaymentsDetailsComponent', () => {
  let component: StudentPaymentsDetailsComponent;
  let fixture: ComponentFixture<StudentPaymentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPaymentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPaymentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
