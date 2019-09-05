import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRequestTableComponent } from './teacher-request-table.component';

describe('TeacherRequestTableComponent', () => {
  let component: TeacherRequestTableComponent;
  let fixture: ComponentFixture<TeacherRequestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherRequestTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
