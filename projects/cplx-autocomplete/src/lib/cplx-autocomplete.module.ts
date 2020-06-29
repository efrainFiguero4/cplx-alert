import { NgModule } from '@angular/core';
import { CplxAutocompleteComponent, FilterPipe, RequiredDirective } from './cplx-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [CplxAutocompleteComponent, FilterPipe, RequiredDirective],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: [CplxAutocompleteComponent, FilterPipe, RequiredDirective]
})
export class CplxAutocompleteModule { }
