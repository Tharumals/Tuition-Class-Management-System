import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPdfViewComponent } from './teacher-pdf-view.component';

describe('TeacherPdfViewComponent', () => {
  let component: TeacherPdfViewComponent;
  let fixture: ComponentFixture<TeacherPdfViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPdfViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPdfViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
