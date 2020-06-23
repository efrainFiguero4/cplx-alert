import { Component, OnInit, Input, HostListener, PipeTransform, Pipe, Output, EventEmitter, ElementRef, ViewChild, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { fromEvent } from 'rxjs';
import { of } from "rxjs";
import { debounceTime, map, distinctUntilChanged, filter } from "rxjs/operators";
import { NgModel, NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormControl, Validators } from '@angular/forms';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
	transform(items: any[], searchText: string, visible: boolean, params?: string[]): any {
		if (!items) return [];
		if (!searchText || !visible) return items;

		if (!isNullOrUndefined(params) && params.length > 0)
			return items.filter((data) => new RegExp(searchText, 'gi').test(data["search"]));
	}

	matchValue(data: any[], value: string) {
		return Object.keys(data).map((key) => {
			return new RegExp(value, 'gi').test(data[key]);
		}).some(result => result);
	}

	matchValueParams(data: any[], value: string, params: string[]) {
		return params.map((key) => {
			return new RegExp(value, 'gi').test(data[key]);
		}).some(result => result);
	}
}


const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => CplxAutocompleteComponent),
	multi: true
};

@Component({
	selector: 'cplx-autocomplete',
	templateUrl: './cplx-autocomplete.html',
	styleUrls: ['./cplx-autocomplete.css'],
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CplxAutocompleteComponent implements OnInit, OnChanges, ControlValueAccessor {
	constructor() { }

	visible = false;
	idcontainer: string;

	@Input() params: string[];
	@Input() data: any[];
	@Input() placeholder: string;
	@Input() filter: boolean = false;
	@Output() selectedObject = new EventEmitter<any>(true);
	@Output() textChange = new EventEmitter<String>(true)
	@Input() timeout = 500;
	@Input() minlength = 2;
	@Input() loading = false;
	@Input() disabled: boolean = false;
	@Input() reflectparam: any;
	@Input() reflectvalue: any;
	@Input() required = false;

	@ViewChild('inputSearch', { static: true }) inputSearch: ElementRef;

	formulario = new FormGroup({
		value: new FormControl(null)
	});

	ngOnInit(): void {
		this.idcontainer = Math.random().toString().split(".")[1];
		if (!this.filter) {
			fromEvent(this.inputSearch.nativeElement, 'keyup').pipe(
				map((event: any) => {
					return event.target.value;
				}),
				filter(res => res.length >= this.minlength),
				debounceTime(this.timeout),
				distinctUntilChanged()
			).subscribe((text: string) => {
				this.value = text;
				this.visible = true;
				this.textChange.emit(text);
				//this.loading = true;
			});
		}

		if (this.required) {
			this.set_validator(this.formulario, "value", this.required);
		}
		this.formulario.controls.value.updateValueAndValidity();
	}

	set_validator(formgroup: FormGroup, control: string, required?: boolean) {
		if (required) formgroup.controls[control].setValidators([Validators.required]);
		else formgroup.controls[control].clearValidators();
		formgroup.controls[control].updateValueAndValidity();
	}

	select(object: any) {
		this.selectedObject.emit(object);
		this.writeValue(object[this.search]);
		this.visible = false;
	}

	public search = "search";

	ngOnChanges(changes: SimpleChanges): void {
		this.completar();
	}

	completar() {
		if (this.data) {
			this.data.forEach((d) => {
				let items = [];
				this.params.map((key) => {
					items.push(d[key]);
				})
				d[this.search] = items.join(" - ");
			});
			setTimeout(() => {
				if (this.data && this.reflectparam && this.reflectvalue && this.filter) {
					let object = this.data.filter(d => d[this.reflectparam] == this.reflectvalue)[0];
					if (!isNullOrUndefined(object)) {
						this.value = object[this.search];
						this.selectedObject.emit(object);
						this.textChange.emit(object[this.reflectparam]);
					}
				}
			}, 200);
		}
		this.formulario.controls.value.updateValueAndValidity();
	}

	@HostListener('window:click', ['$event.target'])
	onClick(targetElement: any) {
		let clases: string[] = targetElement.className.split(" ");
		let clasecontrol: any[] = clases.filter(clase => clase == 'form-control-search');
		let clasecontainer: any[] = clases.filter(clase => clase == this.idcontainer);
		this.visible = (clasecontrol.length == 0 || clasecontainer.length == 0) ? false : true;
		this.formulario.controls.value.updateValueAndValidity()
	}

	private _value: any = '';
	get value(): any { return this._value; };

	set value(v: any) {
		if (v !== this._value) {
			this._value = v;
			this.formulario.controls.value.setValue(v);
			this.formulario.controls.value.updateValueAndValidity();
			this.onChange(v);
		}
	}

	writeValue(value: any) {
		this._value = value;
		this.formulario.controls.value.setValue(value);
		this.formulario.controls.value.updateValueAndValidity();
		this.onChange(value);
	}

	onChange = (_: any) => { };
	onTouched = () => { };
	registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
	registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
