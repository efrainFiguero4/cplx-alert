import { TestBed } from '@angular/core/testing';

import { NgDatatableService } from './ng-datatable.service';

describe('NgDatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDatatableService = TestBed.get(NgDatatableService);
    expect(service).toBeTruthy();
  });
});
