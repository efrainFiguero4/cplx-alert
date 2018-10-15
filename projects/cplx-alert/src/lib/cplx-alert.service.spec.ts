import { TestBed } from '@angular/core/testing';

import { CplxAlertService } from './cplx-alert.service';

describe('CplxAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CplxAlertService = TestBed.get(CplxAlertService);
    expect(service).toBeTruthy();
  });
});
