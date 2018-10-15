import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CplxAlertComponent } from './cplx-alert.component';

describe('CplxAlertComponent', () => {
  let component: CplxAlertComponent;
  let fixture: ComponentFixture<CplxAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CplxAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CplxAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
