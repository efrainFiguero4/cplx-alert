import { Injectable } from '@angular/core';

export class Paginacion {
	desde: number;
	hasta: number;
	atras: number;
	actual: number = 1;
	siguiente: number;
	totalitem: number;
	totalpaginas: number;
	porpagina: number = 30;
	paginasmostrar = 5;
	paginas: number[] = [];
}

export class ConfigDataTable {
	pagination: boolean = false;
	search: boolean = false;
}


@Injectable({
	providedIn: 'root'
})
export class CplxDatatableService {

	constructor() { }


	crear_data_paginado(datalista: any[], totalpaginas: number, porpagina: number) {
		var paginado = {};
		var porpaginaactual = porpagina;
		var posactual = 0;
		for (let index = 1; index <= totalpaginas; index++) {
			if (index == totalpaginas)
				porpaginaactual = datalista.length;
			paginado["pagina" + index] = datalista.slice(posactual, posactual + porpaginaactual);
			posactual = posactual + porpaginaactual;
		}
		return paginado;
	}

	crear_paginacion(totalitems: number, paginaactual: number, porpagina: number) {
		var paginacion = new Paginacion();
		paginacion.totalitem = totalitems;
		paginacion.totalpaginas = Math.ceil(totalitems / porpagina) || 0;
		paginacion.paginas = this.getPages(totalitems, porpagina, paginaactual, paginacion.paginasmostrar);
		paginacion.actual = paginaactual;
		if (paginaactual == 1 && paginacion.totalpaginas > 1) {
			paginacion.atras = paginaactual;
			paginacion.siguiente = paginaactual + 1;
		} else if (paginaactual == paginacion.totalpaginas) {
			paginacion.atras = paginaactual - 1;
			paginacion.siguiente = paginaactual;
		} else if (paginacion.paginas.length == paginaactual) {
			paginacion.atras = paginaactual;
			paginacion.actual = paginaactual;
			paginacion.siguiente = paginaactual;
		} else {
			paginacion.atras = paginaactual - 1;
			paginacion.siguiente = paginaactual + 1;
		}
		paginacion.porpagina = porpagina;
		paginacion.desde = ((porpagina * paginaactual) - porpagina) + 1;

		var maximoitems = porpagina * paginaactual;
		paginacion.hasta = maximoitems > totalitems ? totalitems : maximoitems;
		//console.log(paginacion);
		return paginacion;
	}

	getPages(totalitems: number, porpagina: number, paginactual: number, paginasmostrar: number): number[] {
		const c = Math.ceil(totalitems / porpagina);
		const p = paginactual || 1;
		const pagesToShow = paginasmostrar || 9;
		const pages: number[] = [];
		pages.push(p);
		const times = pagesToShow - 1;
		for (let i = 0; i < times; i++) {
			if (pages.length < pagesToShow) {
				if (Math.min.apply(null, pages) > 1) {
					pages.push(Math.min.apply(null, pages) - 1);
				}
			}
			if (pages.length < pagesToShow) {
				if (Math.max.apply(null, pages) < c) {
					pages.push(Math.max.apply(null, pages) + 1);
				}
			}
		}
		pages.sort((a, b) => a - b);
		return pages;
	}

}
