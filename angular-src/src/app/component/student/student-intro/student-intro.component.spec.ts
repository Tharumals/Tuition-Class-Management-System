import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIntroComponent } from './student-intro.component';

describe('StudentIntroComponent', () => {
  let component: StudentIntroComponent;
  let fixture: ComponentFixture<StudentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
