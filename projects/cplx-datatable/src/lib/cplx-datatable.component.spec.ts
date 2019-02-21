import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CplxDatatableComponent } from './cplx-datatable.component';

describe('CplxDatatableComponent', () => {
  let component: CplxDatatableComponent;
  let fixture: ComponentFixture<CplxDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CplxDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CplxDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
