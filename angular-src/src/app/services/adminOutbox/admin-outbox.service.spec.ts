import { TestBed, inject } from '@angular/core/testing';

import { AdminOutboxService } from './admin-outbox.service';

describe('AdminOutboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminOutboxService]
    });
  });

  it('should be created', inject([AdminOutboxService], (service: AdminOutboxService) => {
    expect(service).toBeTruthy();
  }));
});
