import { Component, OnInit, Input, HostListener, PipeTransform, Pipe, Output, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
	transform(items: any[], searchText: string, visible: boolean, params?: string[]): any {
		if (!items) return [];
		if (!searchText || !visible) return items;

		if (!isNullOrUndefined(params) && params.length > 0)
			return items.filter((data) => new RegExp(searchText, 'gi').test(data["search"]));
		//	return items.filter((data) => this.matchValueParams(data, searchText, params));
		/*else
			return items.filter((data) => this.matchValue(data, searchText));*/
	}

	matchValue(data: any[], value: string) {
		//console.log("todos");
		return Object.keys(data).map((key) => {
			return new RegExp(value, 'gi').test(data[key]);
		}).some(result => result);
	}

	matchValueParams(data: any[], value: string, params: string[]) {
		//console.log("especificos");
		return params.map((key) => {
			return new RegExp(value, 'gi').test(data[key]);
		}).some(result => result);
	}
}

@Component({
	selector: 'cplx-autocomplete',
	templateUrl: './cplx-autocomplete.html',
	styleUrls: ['./cplx-autocomplete.css']
})
export class CplxAutocompleteComponent implements OnInit {
	constructor() { }

	visible = false;
	@Input() searchText: string;
	@Input() params: string[];
	@Input() data: any[];
	@Input() placeholder: string;
	@Input() split: string = " - ";
	@Output() selected = new EventEmitter<any>(true);

	idcontainer: string;
	ngOnInit(): void {
		this.idcontainer = Math.random().toString().split(".")[1];
		setTimeout(() => {
			this.completar();
		}, 200);
	}

	completar() {
		if (this.data) {
			this.data.forEach((d) => {
				let items = [];
				//console.log(d);
				this.params.map((key) => {
					items.push(d[key]);
				})
				d["search"] = items.join(" - ")
			});
		}
	}

	@HostListener('window:click', ['$event.target'])
	onClick(targetElement: any) {
		let clases: string[] = targetElement.className.split(" ");
		let clasecontrol: any[] = clases.filter(clase => clase == 'form-control-search');
		let clasecontainer: any[] = clases.filter(clase => clase == this.idcontainer);
		this.visible = (clasecontrol.length == 0 || clasecontainer.length == 0) ? false : true;
	}
}
