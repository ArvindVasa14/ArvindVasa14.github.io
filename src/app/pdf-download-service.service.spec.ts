import { TestBed } from '@angular/core/testing';

import { PdfDownloadServiceService } from './pdf-download-service.service';

describe('PdfDownloadServiceService', () => {
  let service: PdfDownloadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfDownloadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
