import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherOutboxComponent } from './teacher-outbox.component';

describe('TeacherOutboxComponent', () => {
  let component: TeacherOutboxComponent;
  let fixture: ComponentFixture<TeacherOutboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherOutboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherOutboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
