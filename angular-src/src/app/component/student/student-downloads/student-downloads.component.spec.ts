import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDownloadsComponent } from './student-downloads.component';

describe('StudentDownloadsComponent', () => {
  let component: StudentDownloadsComponent;
  let fixture: ComponentFixture<StudentDownloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDownloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
