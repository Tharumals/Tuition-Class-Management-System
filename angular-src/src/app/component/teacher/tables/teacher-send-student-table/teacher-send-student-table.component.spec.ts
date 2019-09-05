import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSendStudentTableComponent } from './teacher-send-student-table.component';

describe('TeacherSendStudentTableComponent', () => {
  let component: TeacherSendStudentTableComponent;
  let fixture: ComponentFixture<TeacherSendStudentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSendStudentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSendStudentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
