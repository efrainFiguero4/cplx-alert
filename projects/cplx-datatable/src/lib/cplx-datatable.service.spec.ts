import { TestBed } from '@angular/core/testing';

import { CplxDatatableService } from './cplx-datatable.service';

describe('CplxDatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CplxDatatableService = TestBed.get(CplxDatatableService);
    expect(service).toBeTruthy();
  });
});
