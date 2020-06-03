import { NgModule } from '@angular/core';
import { CplxDatatableComponent } from './cplx-datatable.component';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CplxDatatableService } from './cplx-datatable.service';
import { isNullOrUndefined } from 'util';

@Pipe({
	name: 'datatablepipe'
})
export class SearchPipe implements PipeTransform {
	transform(items: any, filter: any): any {
		if (!filter)
			return items;
		if (isNullOrUndefined(filter) || filter == "")
			return items;
		if (!Array.isArray(items))
			return items;

		if (filter && Array.isArray(items)) {
			let filterKeys = Object.keys(filter);
			return items.filter(item => {
				return filterKeys.some((keyName) => {
					return new RegExp(String(filter[keyName]).trim(), 'gi').test(item[keyName]) || filter[keyName] == "";
				});
			});
		}
	}
}

@NgModule({
	declarations: [CplxDatatableComponent, SearchPipe],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: [CplxDatatableComponent],
	providers: [CplxDatatableService]
})

export class CplxDatatableModule { }
