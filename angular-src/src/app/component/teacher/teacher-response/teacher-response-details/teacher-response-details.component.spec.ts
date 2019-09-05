import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherResponseDetailsComponent } from './teacher-response-details.component';

describe('TeacherResponseDetailsComponent', () => {
  let component: TeacherResponseDetailsComponent;
  let fixture: ComponentFixture<TeacherResponseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherResponseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherResponseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
