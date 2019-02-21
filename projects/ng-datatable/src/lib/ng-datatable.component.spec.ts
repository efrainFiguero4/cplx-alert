import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatatableComponent } from './ng-datatable.component';

describe('NgDatatableComponent', () => {
  let component: NgDatatableComponent;
  let fixture: ComponentFixture<NgDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
