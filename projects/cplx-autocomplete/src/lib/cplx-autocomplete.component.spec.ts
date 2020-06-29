import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CplxAutocompleteComponent } from './cplx-autocomplete.component';

describe('CplxAutocompleteComponent', () => {
	let component: CplxAutocompleteComponent;
	let fixture: ComponentFixture<CplxAutocompleteComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CplxAutocompleteComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CplxAutocompleteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
