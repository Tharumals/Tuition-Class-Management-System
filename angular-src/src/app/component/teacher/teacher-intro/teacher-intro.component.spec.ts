import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherIntroComponent } from './teacher-intro.component';

describe('TeacherIntroComponent', () => {
  let component: TeacherIntroComponent;
  let fixture: ComponentFixture<TeacherIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
