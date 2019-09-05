import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountIssuesComponent } from './account-issues.component';

describe('AccountIssuesComponent', () => {
  let component: AccountIssuesComponent;
  let fixture: ComponentFixture<AccountIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
