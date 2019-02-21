import { Injectable, NgModule, Component, Input, Pipe, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { isNullOrUndefined } from 'util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Paginacion {
    constructor() {
        this.actual = 1;
        this.porpagina = 30;
        this.paginasmostrar = 5;
        this.paginas = [];
    }
}
class ConfigDataTable {
    constructor() {
        this.pagination = false;
        this.search = false;
    }
}
class CplxDatatableService {
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
/** @nocollapse */ CplxDatatableService.ngInjectableDef = defineInjectable({ factory: function CplxDatatableService_Factory() { return new CplxDatatableService(); }, token: CplxDatatableService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CplxDatatableComponent {
    /**
     * @param {?} _cplxdatatableservice
     */
    constructor(_cplxdatatableservice) {
        this._cplxdatatableservice = _cplxdatatableservice;
        this.search = "";
        this.paginacion = new Paginacion();
        this.itemlistpaginates = {};
        this.ls_paginas = [];
        this.defaultpages = [20, 30, 50, 100];
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.loading = true;
        this.ls_paginas = isNullOrUndefined(this.pages) ? this.defaultpages : this.pages;
        if (isNullOrUndefined(this.config)) {
            this.config = new ConfigDataTable;
            this.itemlistcurrentpage = this.itemlist;
        }
        else {
            if (this.config.pagination) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    search_data(value) {
        this.searchparam = {};
        this.content.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.searchparam[element.toString()] = value;
        }));
        return this.searchparam;
    }
    /**
     * @param {?} totalitem
     * @param {?} pagina
     * @param {?} porpagina
     * @return {?}
     */
    go_page(totalitem, pagina, porpagina) {
        this.paginacion.actual = pagina;
        this.paginacion = this._cplxdatatableservice.crear_paginacion(totalitem, pagina, porpagina);
        this.itemlistcurrentpage = this.itemlistpaginates["pagina" + pagina];
    }
    /**
     * @param {?} porpagina
     * @return {?}
     */
    go_porpage(porpagina) {
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
CplxDatatableComponent.decorators = [
    { type: Component, args: [{
                selector: 'cplx-datatable',
                template: "<div class=\"row align-items-center\">\r\n\t<div class=\"col-sm-6\">\r\n\t\t<input *ngIf=\"config.search\" type=\"text\" placeholder=\"Buscar\" [(ngModel)]=\"search\"\r\n\t\t\tclass=\"form-control form-control-sm\">\r\n\t</div>\r\n\t<div class=\"col-sm-6\">\r\n\t\t<div class=\"d-flex flex-row py-2 align-items-center bg-sura\" *ngIf=\"config.pagination\">\r\n\t\t\t<div class=\"ml-auto\" *ngIf=\"paginacion.totalitem > 0\">\r\n\t\t\t\t<ul class=\"pagination pagination-sm m-0 align-items-center\">\r\n\t\t\t\t\t<li class=\"list-inline-item text-primary\">\r\n\t\t\t\t\t\tdesde {{ paginacion.desde }} al {{ paginacion.hasta }} de {{ paginacion.totalitem }}</li>\r\n\t\t\t\t\t<li class=\"list-inline-item text-primary pr-4\">\r\n\t\t\t\t\t\t| {{paginacion.totalpaginas + ' P\u00E1ginas'}}\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li [ngClass]=\"{'disabled': paginacion.actual == 1}\"\r\n\t\t\t\t\t\t(click)=\"go_page(paginacion.totalitem,paginacion.atras,paginacion.porpagina)\" class=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li (click)=\"pag == paginacion.actual ? '' : go_page(paginacion.totalitem,pag,paginacion.porpagina)\"\r\n\t\t\t\t\t\tclass=\"page-item\" [ngClass]=\"{'active': pag == paginacion.actual}\"\r\n\t\t\t\t\t\t*ngFor=\"let pag of paginacion?.paginas\">\r\n\t\t\t\t\t\t<a class=\"page-link\">{{pag}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li [ngClass]=\"{'disabled' : paginacion.actual == paginacion.totalpaginas}\"\r\n\t\t\t\t\t\t(click)=\"go_page(paginacion.totalitem,paginacion.siguiente,paginacion.porpagina)\"\r\n\t\t\t\t\t\tclass=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"pl-5\" *ngIf=\"paginacion.totalitem > 0\">\r\n\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t<a class=\"btn btn-success btn-sm dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\"\r\n\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t{{paginacion.porpagina}} P\u00E1ginas\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t<a class=\"dropdown-item\" *ngFor=\"let pag of pages\" (click)=\"go_porpage(pag)\">{{pag}} P\u00E1ginas</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n\t<table class=\"table table-sura table-bordered table-hover\">\r\n\t\t<thead class=\"table-thead\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th class=\"text-center w-5\" *ngFor=\"let cabecera of header\"> {{cabecera}}</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody *ngIf=\"!loading && itemlistcurrentpage?.length\">\r\n\t\t\t<tr *ngFor=\"let item of itemlistcurrentpage | datatablepipe : search != '' ? search_data(search) :''\">\r\n\t\t\t\t<td *ngFor=\"let c of content\">{{item[c]}}</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n\t<div class=\"w-100 text-center text-bold-sura\" *ngIf=\"!itemlistcurrentpage?.length || loading\"> <i\r\n\t\t\tclass=\"fa fa-spin fa-pulse\"></i>\r\n\t\t<i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse\"></i>\r\n\t\t{{loading ? 'CARGANDO ...' : (!itemlistcurrentpage?.length ? '-- No se encontraron registros --' : '')}}\r\n\t</div>\r\n</div>\r\n",
                styles: [".pagination .page-item.active a{color:#fff!important;background-color:#0039ae!important;font-weight:700}.dropdown .dropdown-menu{box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);-moz-box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);-webkit-box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);transition:.3s;font-size:14px;max-height:0;display:block;overflow:hidden;opacity:0}.dropdown:hover .dropdown-menu{max-height:250px;opacity:1}.dropdown-menu{margin:0!important;border-radius:0!important;font-size:13px!important}.text-bold-sura{color:#0039ae!important;font-weight:700!important;font-family:'Trebuchet MS'!important}.text-bold{font-weight:700!important}.text-sura{font-size:12px!important;color:#0039ae!important;font-family:'Trebuchet MS'!important}.bg-sura{background-color:#eaf0f8!important;font-family:'Trebuchet MS'!important}.col-form-label{font-size:13px!important;line-height:1.5!important;color:#0039ae!important;font-family:'Trebuchet MS'}.table thead th{color:#0039a6!important;background-color:#eaf0f8!important;font-size:10px!important}.table.table-sura{border-top:1px solid silver!important;border-left:1px solid silver!important}.table td,.table th{padding:.75rem;font-size:11px}.table td{color:#706f6f!important}.table-active td{color:#0039a6!important;background-color:#e3d829!important;font-weight:700!important}.texto{font-size:10px;font-family:'Trebuchet MS'!important;text-align:justify;text-decoration:none}.table-bordered td,.table-bordered th{font-family:'Trebuchet MS'}"]
            }] }
];
/** @nocollapse */
CplxDatatableComponent.ctorParameters = () => [
    { type: CplxDatatableService }
];
CplxDatatableComponent.propDecorators = {
    itemlist: [{ type: Input }],
    header: [{ type: Input }],
    content: [{ type: Input }],
    loading: [{ type: Input }],
    search: [{ type: Input }],
    config: [{ type: Input }],
    pages: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchPipe {
    /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    transform(items, filter) {
        if (!filter)
            return items;
        if (isNullOrUndefined(filter) || filter == "")
            return items;
        if (!Array.isArray(items))
            return items;
        if (filter && Array.isArray(items)) {
            /** @type {?} */
            let filterKeys = Object.keys(filter);
            return items.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return filterKeys.some((/**
                 * @param {?} keyName
                 * @return {?}
                 */
                (keyName) => {
                    return new RegExp(String(filter[keyName]).trim(), 'gi').test(item[keyName]) || filter[keyName] == "";
                }));
            }));
        }
    }
}
SearchPipe.decorators = [
    { type: Pipe, args: [{
                name: 'datatablepipe'
            },] }
];
class CplxDatatableModule {
}
CplxDatatableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CplxDatatableComponent, SearchPipe],
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                exports: [CplxDatatableComponent],
                providers: [CplxDatatableService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Paginacion, ConfigDataTable, CplxDatatableService, CplxDatatableComponent, SearchPipe, CplxDatatableModule };

//# sourceMappingURL=cplx-datatable.js.map