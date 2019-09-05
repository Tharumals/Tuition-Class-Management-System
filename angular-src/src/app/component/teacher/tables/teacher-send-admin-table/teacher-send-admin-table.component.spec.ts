import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSendAdminTableComponent } from './teacher-send-admin-table.component';

describe('TeacherSendAdminTableComponent', () => {
  let component: TeacherSendAdminTableComponent;
  let fixture: ComponentFixture<TeacherSendAdminTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSendAdminTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSendAdminTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
