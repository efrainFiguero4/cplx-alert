import { NgModule } from '@angular/core';
import { CplxAutocompleteComponent, FilterPipe } from './cplx-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [CplxAutocompleteComponent, FilterPipe],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: [CplxAutocompleteComponent, FilterPipe]
})
export class CplxAutocompleteModule { }
