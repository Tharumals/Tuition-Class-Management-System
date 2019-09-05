import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMesssageDetailsComponent } from './student-messsage-details.component';

describe('StudentMesssageDetailsComponent', () => {
  let component: StudentMesssageDetailsComponent;
  let fixture: ComponentFixture<StudentMesssageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMesssageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMesssageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
