import { TestBed } from '@angular/core/testing';

import { CommanServiceService } from './comman-service.service';

describe('CommanServiceService', () => {
  let service: CommanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
