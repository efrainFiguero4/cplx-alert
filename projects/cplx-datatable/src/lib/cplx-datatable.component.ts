import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Paginacion, CplxDatatableService, ConfigDataTable } from './cplx-datatable.service';
import { isNullOrUndefined } from 'util';

@Component({
	selector: 'cplx-datatable',
	templateUrl: './cplx-datatable.component.html',
	styleUrls: ['./cplx-datatable.component.css']
})
export class CplxDatatableComponent implements OnInit, OnChanges {

	@Input() itemlist: any[];
	@Input() header: string[];
	@Input() content: string[];
	@Input() loading: boolean;
	@Input() search: string = "";
	@Input() config: ConfigDataTable | null;
	@Input() pages: number[];

	constructor(private _cplxdatatableservice: CplxDatatableService) { }

	paginacion = new Paginacion();
	searchparam: any | {};
	itemlistpaginates = {};
	itemlistcurrentpage: any[];

	ls_paginas: number[] = [];

	defaultpages = [20, 30, 50, 100];

	ngOnInit() { }

	ngOnChanges(changes: SimpleChanges): void {
		this.loading = true;
		this.ls_paginas = isNullOrUndefined(this.pages) ? this.defaultpages : this.pages;

		if (isNullOrUndefined(this.config)) {
			this.config = new ConfigDataTable;
			this.itemlistcurrentpage = this.itemlist;
		} else {
			if (this.config.pagination && !isNullOrUndefined(this.itemlist) && this.itemlist.length) {
				this.paginacion.actual = 1;
				this.paginacion.paginasmostrar = 3;
				this.paginacion.porpagina = 10;
				this.paginacion = this._cplxdatatableservice.crear_paginacion(this.itemlist.length, this.paginacion.actual, this.paginacion.porpagina);
				this.itemlistpaginates = this._cplxdatatableservice.crear_data_paginado(this.itemlist, this.paginacion.totalpaginas, this.paginacion.porpagina);
				this.go_page(this.paginacion.totalitem, this.paginacion.actual, this.paginacion.porpagina);
			}
		}
		this.loading = false;
	}

	search_data(value: string) {
		this.searchparam = {};
		this.content.forEach(element => {
			this.searchparam[element.toString()] = value;
		});
		return this.searchparam;
	}

	go_page(totalitem: number, pagina: number, porpagina: number) {
		this.paginacion.actual = pagina;
		this.paginacion = this._cplxdatatableservice.crear_paginacion(totalitem, pagina, porpagina)
		this.itemlistcurrentpage = this.itemlistpaginates["pagina" + pagina];
	}

	go_porpage(porpagina: number) {
		this.loading = true;
		this.paginacion.porpagina = porpagina;
		this.itemlistpaginates = {};
		this.itemlistcurrentpage = [];
		this.paginacion = this._cplxdatatableservice.crear_paginacion(this.itemlist.length, 1, porpagina);
		this.itemlistpaginates = this._cplxdatatableservice.crear_data_paginado(this.itemlist, this.paginacion.totalpaginas, this.paginacion.porpagina);
		this.itemlistcurrentpage = this.itemlistpaginates["pagina" + this.paginacion.actual];
		this.loading = false;
	}

}
