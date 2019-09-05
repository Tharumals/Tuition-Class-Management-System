import { TestBed, inject } from '@angular/core/testing';

import { TeacherSendService } from './teacher-send.service';

describe('TeacherSendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherSendService]
    });
  });

  it('should be created', inject([TeacherSendService], (service: TeacherSendService) => {
    expect(service).toBeTruthy();
  }));
});
