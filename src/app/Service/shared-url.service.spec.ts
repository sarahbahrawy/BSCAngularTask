import { TestBed } from '@angular/core/testing';

import { SharedURLService } from './shared-url.service';

describe('SharedURLService', () => {
  let service: SharedURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
