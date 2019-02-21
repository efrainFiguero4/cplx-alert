/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class Paginacion {
    constructor() {
        this.actual = 1;
        this.porpagina = 30;
        this.paginasmostrar = 5;
        this.paginas = [];
    }
}
if (false) {
    /** @type {?} */
    Paginacion.prototype.desde;
    /** @type {?} */
    Paginacion.prototype.hasta;
    /** @type {?} */
    Paginacion.prototype.atras;
    /** @type {?} */
    Paginacion.prototype.actual;
    /** @type {?} */
    Paginacion.prototype.siguiente;
    /** @type {?} */
    Paginacion.prototype.totalitem;
    /** @type {?} */
    Paginacion.prototype.totalpaginas;
    /** @type {?} */
    Paginacion.prototype.porpagina;
    /** @type {?} */
    Paginacion.prototype.paginasmostrar;
    /** @type {?} */
    Paginacion.prototype.paginas;
}
export class ConfigDataTable {
    constructor() {
        this.pagination = false;
        this.search = false;
    }
}
if (false) {
    /** @type {?} */
    ConfigDataTable.prototype.pagination;
    /** @type {?} */
    ConfigDataTable.prototype.search;
}
export class CplxDatatableService {
    constructor() { }
    /**
     * @param {?} datalista
     * @param {?} totalpaginas
     * @param {?} porpagina
     * @return {?}
     */
    crear_data_paginado(datalista, totalpaginas, porpagina) {
        /** @type {?} */
        var paginado = {};
        /** @type {?} */
        var porpaginaactual = porpagina;
        /** @type {?} */
        var posactual = 0;
        for (let index = 1; index <= totalpaginas; index++) {
            if (index == totalpaginas)
                porpaginaactual = datalista.length;
            paginado["pagina" + index] = datalista.slice(posactual, posactual + porpaginaactual);
            posactual = posactual + porpaginaactual;
        }
        return paginado;
    }
    /**
     * @param {?} totalitems
     * @param {?} paginaactual
     * @param {?} porpagina
     * @return {?}
     */
    crear_paginacion(totalitems, paginaactual, porpagina) {
        /** @type {?} */
        var paginacion = new Paginacion();
        paginacion.totalitem = totalitems;
        paginacion.totalpaginas = Math.ceil(totalitems / porpagina) || 0;
        paginacion.paginas = this.getPages(totalitems, porpagina, paginaactual, paginacion.paginasmostrar);
        paginacion.actual = paginaactual;
        if (paginaactual == 1 && paginacion.totalpaginas > 1) {
            paginacion.atras = paginaactual;
            paginacion.siguiente = paginaactual + 1;
        }
        else if (paginaactual == paginacion.totalpaginas) {
            paginacion.atras = paginaactual - 1;
            paginacion.siguiente = paginaactual;
        }
        else if (paginacion.paginas.length == paginaactual) {
            paginacion.atras = paginaactual;
            paginacion.actual = paginaactual;
            paginacion.siguiente = paginaactual;
        }
        else {
            paginacion.atras = paginaactual - 1;
            paginacion.siguiente = paginaactual + 1;
        }
        paginacion.porpagina = porpagina;
        paginacion.desde = ((porpagina * paginaactual) - porpagina) + 1;
        /** @type {?} */
        var maximoitems = porpagina * paginaactual;
        paginacion.hasta = maximoitems > totalitems ? totalitems : maximoitems;
        console.log(paginacion);
        return paginacion;
    }
    /**
     * @param {?} totalitems
     * @param {?} porpagina
     * @param {?} paginactual
     * @param {?} paginasmostrar
     * @return {?}
     */
    getPages(totalitems, porpagina, paginactual, paginasmostrar) {
        /** @type {?} */
        const c = Math.ceil(totalitems / porpagina);
        /** @type {?} */
        const p = paginactual || 1;
        /** @type {?} */
        const pagesToShow = paginasmostrar || 9;
        /** @type {?} */
        const pages = [];
        pages.push(p);
        /** @type {?} */
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
        pages.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a - b));
        return pages;
    }
}
CplxDatatableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CplxDatatableService.ctorParameters = () => [];
/** @nocollapse */ CplxDatatableService.ngInjectableDef = i0.defineInjectable({ factory: function CplxDatatableService_Factory() { return new CplxDatatableService(); }, token: CplxDatatableService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1kYXRhdGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NwbHgtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NwbHgtZGF0YXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE1BQU0sT0FBTyxVQUFVO0lBQXZCO1FBSUMsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUluQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLFlBQU8sR0FBYSxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUFBOzs7SUFWQSwyQkFBYzs7SUFDZCwyQkFBYzs7SUFDZCwyQkFBYzs7SUFDZCw0QkFBbUI7O0lBQ25CLCtCQUFrQjs7SUFDbEIsK0JBQWtCOztJQUNsQixrQ0FBcUI7O0lBQ3JCLCtCQUF1Qjs7SUFDdkIsb0NBQW1COztJQUNuQiw2QkFBdUI7O0FBR3hCLE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBQ0MsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixXQUFNLEdBQVksS0FBSyxDQUFDO0lBQ3pCLENBQUM7Q0FBQTs7O0lBRkEscUNBQTRCOztJQUM1QixpQ0FBd0I7O0FBT3pCLE1BQU0sT0FBTyxvQkFBb0I7SUFFaEMsZ0JBQWdCLENBQUM7Ozs7Ozs7SUFHakIsbUJBQW1CLENBQUMsU0FBZ0IsRUFBRSxZQUFvQixFQUFFLFNBQWlCOztZQUN4RSxRQUFRLEdBQUcsRUFBRTs7WUFDYixlQUFlLEdBQUcsU0FBUzs7WUFDM0IsU0FBUyxHQUFHLENBQUM7UUFDakIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuRCxJQUFJLEtBQUssSUFBSSxZQUFZO2dCQUN4QixlQUFlLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNwQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsR0FBRyxlQUFlLENBQUMsQ0FBQztZQUNyRixTQUFTLEdBQUcsU0FBUyxHQUFHLGVBQWUsQ0FBQztTQUN4QztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFrQixFQUFFLFlBQW9CLEVBQUUsU0FBaUI7O1lBQ3ZFLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNqQyxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUNsQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25HLFVBQVUsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksWUFBWSxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUNyRCxVQUFVLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztZQUNoQyxVQUFVLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDeEM7YUFBTSxJQUFJLFlBQVksSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFO1lBQ25ELFVBQVUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUNwQyxVQUFVLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztTQUNwQzthQUFNLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksWUFBWSxFQUFFO1lBQ3JELFVBQVUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1lBQ2hDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1NBQ3BDO2FBQU07WUFDTixVQUFVLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDcEMsVUFBVSxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDakMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFFNUQsV0FBVyxHQUFHLFNBQVMsR0FBRyxZQUFZO1FBQzFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7OztJQUVELFFBQVEsQ0FBQyxVQUFrQixFQUFFLFNBQWlCLEVBQUUsV0FBbUIsRUFBRSxjQUFzQjs7Y0FDcEYsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzs7Y0FDckMsQ0FBQyxHQUFHLFdBQVcsSUFBSSxDQUFDOztjQUNwQixXQUFXLEdBQUcsY0FBYyxJQUFJLENBQUM7O2NBQ2pDLEtBQUssR0FBYSxFQUFFO1FBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBQ1IsS0FBSyxHQUFHLFdBQVcsR0FBRyxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRTtnQkFDL0IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDNUM7YUFDRDtZQUNELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzVDO2FBQ0Q7U0FDRDtRQUNELEtBQUssQ0FBQyxJQUFJOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1FBQzVCLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7O1lBdkVELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFBhZ2luYWNpb24ge1xuXHRkZXNkZTogbnVtYmVyO1xuXHRoYXN0YTogbnVtYmVyO1xuXHRhdHJhczogbnVtYmVyO1xuXHRhY3R1YWw6IG51bWJlciA9IDE7XG5cdHNpZ3VpZW50ZTogbnVtYmVyO1xuXHR0b3RhbGl0ZW06IG51bWJlcjtcblx0dG90YWxwYWdpbmFzOiBudW1iZXI7XG5cdHBvcnBhZ2luYTogbnVtYmVyID0gMzA7XG5cdHBhZ2luYXNtb3N0cmFyID0gNTtcblx0cGFnaW5hczogbnVtYmVyW10gPSBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbmZpZ0RhdGFUYWJsZSB7XG5cdHBhZ2luYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblx0c2VhcmNoOiBib29sZWFuID0gZmFsc2U7XG59XG5cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3BseERhdGF0YWJsZVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuXHRjcmVhcl9kYXRhX3BhZ2luYWRvKGRhdGFsaXN0YTogYW55W10sIHRvdGFscGFnaW5hczogbnVtYmVyLCBwb3JwYWdpbmE6IG51bWJlcikge1xuXHRcdHZhciBwYWdpbmFkbyA9IHt9O1xuXHRcdHZhciBwb3JwYWdpbmFhY3R1YWwgPSBwb3JwYWdpbmE7XG5cdFx0dmFyIHBvc2FjdHVhbCA9IDA7XG5cdFx0Zm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSB0b3RhbHBhZ2luYXM7IGluZGV4KyspIHtcblx0XHRcdGlmIChpbmRleCA9PSB0b3RhbHBhZ2luYXMpXG5cdFx0XHRcdHBvcnBhZ2luYWFjdHVhbCA9IGRhdGFsaXN0YS5sZW5ndGg7XG5cdFx0XHRwYWdpbmFkb1tcInBhZ2luYVwiICsgaW5kZXhdID0gZGF0YWxpc3RhLnNsaWNlKHBvc2FjdHVhbCwgcG9zYWN0dWFsICsgcG9ycGFnaW5hYWN0dWFsKTtcblx0XHRcdHBvc2FjdHVhbCA9IHBvc2FjdHVhbCArIHBvcnBhZ2luYWFjdHVhbDtcblx0XHR9XG5cdFx0cmV0dXJuIHBhZ2luYWRvO1xuXHR9XG5cblx0Y3JlYXJfcGFnaW5hY2lvbih0b3RhbGl0ZW1zOiBudW1iZXIsIHBhZ2luYWFjdHVhbDogbnVtYmVyLCBwb3JwYWdpbmE6IG51bWJlcikge1xuXHRcdHZhciBwYWdpbmFjaW9uID0gbmV3IFBhZ2luYWNpb24oKTtcblx0XHRwYWdpbmFjaW9uLnRvdGFsaXRlbSA9IHRvdGFsaXRlbXM7XG5cdFx0cGFnaW5hY2lvbi50b3RhbHBhZ2luYXMgPSBNYXRoLmNlaWwodG90YWxpdGVtcyAvIHBvcnBhZ2luYSkgfHwgMDtcblx0XHRwYWdpbmFjaW9uLnBhZ2luYXMgPSB0aGlzLmdldFBhZ2VzKHRvdGFsaXRlbXMsIHBvcnBhZ2luYSwgcGFnaW5hYWN0dWFsLCBwYWdpbmFjaW9uLnBhZ2luYXNtb3N0cmFyKTtcblx0XHRwYWdpbmFjaW9uLmFjdHVhbCA9IHBhZ2luYWFjdHVhbDtcblx0XHRpZiAocGFnaW5hYWN0dWFsID09IDEgJiYgcGFnaW5hY2lvbi50b3RhbHBhZ2luYXMgPiAxKSB7XG5cdFx0XHRwYWdpbmFjaW9uLmF0cmFzID0gcGFnaW5hYWN0dWFsO1xuXHRcdFx0cGFnaW5hY2lvbi5zaWd1aWVudGUgPSBwYWdpbmFhY3R1YWwgKyAxO1xuXHRcdH0gZWxzZSBpZiAocGFnaW5hYWN0dWFsID09IHBhZ2luYWNpb24udG90YWxwYWdpbmFzKSB7XG5cdFx0XHRwYWdpbmFjaW9uLmF0cmFzID0gcGFnaW5hYWN0dWFsIC0gMTtcblx0XHRcdHBhZ2luYWNpb24uc2lndWllbnRlID0gcGFnaW5hYWN0dWFsO1xuXHRcdH0gZWxzZSBpZiAocGFnaW5hY2lvbi5wYWdpbmFzLmxlbmd0aCA9PSBwYWdpbmFhY3R1YWwpIHtcblx0XHRcdHBhZ2luYWNpb24uYXRyYXMgPSBwYWdpbmFhY3R1YWw7XG5cdFx0XHRwYWdpbmFjaW9uLmFjdHVhbCA9IHBhZ2luYWFjdHVhbDtcblx0XHRcdHBhZ2luYWNpb24uc2lndWllbnRlID0gcGFnaW5hYWN0dWFsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYWdpbmFjaW9uLmF0cmFzID0gcGFnaW5hYWN0dWFsIC0gMTtcblx0XHRcdHBhZ2luYWNpb24uc2lndWllbnRlID0gcGFnaW5hYWN0dWFsICsgMTtcblx0XHR9XG5cdFx0cGFnaW5hY2lvbi5wb3JwYWdpbmEgPSBwb3JwYWdpbmE7XG5cdFx0cGFnaW5hY2lvbi5kZXNkZSA9ICgocG9ycGFnaW5hICogcGFnaW5hYWN0dWFsKSAtIHBvcnBhZ2luYSkgKyAxO1xuXG5cdFx0dmFyIG1heGltb2l0ZW1zID0gcG9ycGFnaW5hICogcGFnaW5hYWN0dWFsO1xuXHRcdHBhZ2luYWNpb24uaGFzdGEgPSBtYXhpbW9pdGVtcyA+IHRvdGFsaXRlbXMgPyB0b3RhbGl0ZW1zIDogbWF4aW1vaXRlbXM7XG5cdFx0Y29uc29sZS5sb2cocGFnaW5hY2lvbik7XG5cdFx0cmV0dXJuIHBhZ2luYWNpb247XG5cdH1cblxuXHRnZXRQYWdlcyh0b3RhbGl0ZW1zOiBudW1iZXIsIHBvcnBhZ2luYTogbnVtYmVyLCBwYWdpbmFjdHVhbDogbnVtYmVyLCBwYWdpbmFzbW9zdHJhcjogbnVtYmVyKTogbnVtYmVyW10ge1xuXHRcdGNvbnN0IGMgPSBNYXRoLmNlaWwodG90YWxpdGVtcyAvIHBvcnBhZ2luYSk7XG5cdFx0Y29uc3QgcCA9IHBhZ2luYWN0dWFsIHx8IDE7XG5cdFx0Y29uc3QgcGFnZXNUb1Nob3cgPSBwYWdpbmFzbW9zdHJhciB8fCA5O1xuXHRcdGNvbnN0IHBhZ2VzOiBudW1iZXJbXSA9IFtdO1xuXHRcdHBhZ2VzLnB1c2gocCk7XG5cdFx0Y29uc3QgdGltZXMgPSBwYWdlc1RvU2hvdyAtIDE7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSsrKSB7XG5cdFx0XHRpZiAocGFnZXMubGVuZ3RoIDwgcGFnZXNUb1Nob3cpIHtcblx0XHRcdFx0aWYgKE1hdGgubWluLmFwcGx5KG51bGwsIHBhZ2VzKSA+IDEpIHtcblx0XHRcdFx0XHRwYWdlcy5wdXNoKE1hdGgubWluLmFwcGx5KG51bGwsIHBhZ2VzKSAtIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFnZXMubGVuZ3RoIDwgcGFnZXNUb1Nob3cpIHtcblx0XHRcdFx0aWYgKE1hdGgubWF4LmFwcGx5KG51bGwsIHBhZ2VzKSA8IGMpIHtcblx0XHRcdFx0XHRwYWdlcy5wdXNoKE1hdGgubWF4LmFwcGx5KG51bGwsIHBhZ2VzKSArIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHBhZ2VzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblx0XHRyZXR1cm4gcGFnZXM7XG5cdH1cblxufVxuIl19