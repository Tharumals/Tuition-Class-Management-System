import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSendStudentDetailsComponent } from './teacher-send-student-details.component';

describe('TeacherSendStudentDetailsComponent', () => {
  let component: TeacherSendStudentDetailsComponent;
  let fixture: ComponentFixture<TeacherSendStudentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSendStudentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSendStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
