import { TestBed } from '@angular/core/testing';

import { CplxAutocompleteService } from './cplx-autocomplete.service';

describe('CplxAutocompleteService', () => {
  let service: CplxAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CplxAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
