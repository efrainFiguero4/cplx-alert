(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('util')) :
    typeof define === 'function' && define.amd ? define('cplx-datatable', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'util'], factory) :
    (factory((global['cplx-datatable'] = {}),global.ng.core,global.ng.common,global.ng.forms,global.util));
}(this, (function (exports,i0,common,forms,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Paginacion = /** @class */ (function () {
        function Paginacion() {
            this.actual = 1;
            this.porpagina = 30;
            this.paginasmostrar = 5;
            this.paginas = [];
        }
        return Paginacion;
    }());
    var ConfigDataTable = /** @class */ (function () {
        function ConfigDataTable() {
            this.pagination = false;
            this.search = false;
        }
        return ConfigDataTable;
    }());
    var CplxDatatableService = /** @class */ (function () {
        function CplxDatatableService() {
        }
        /**
         * @param {?} datalista
         * @param {?} totalpaginas
         * @param {?} porpagina
         * @return {?}
         */
        CplxDatatableService.prototype.crear_data_paginado = /**
         * @param {?} datalista
         * @param {?} totalpaginas
         * @param {?} porpagina
         * @return {?}
         */
            function (datalista, totalpaginas, porpagina) {
                /** @type {?} */
                var paginado = {};
                /** @type {?} */
                var porpaginaactual = porpagina;
                /** @type {?} */
                var posactual = 0;
                for (var index = 1; index <= totalpaginas; index++) {
                    if (index == totalpaginas)
                        porpaginaactual = datalista.length;
                    paginado["pagina" + index] = datalista.slice(posactual, posactual + porpaginaactual);
                    posactual = posactual + porpaginaactual;
                }
                return paginado;
            };
        /**
         * @param {?} totalitems
         * @param {?} paginaactual
         * @param {?} porpagina
         * @return {?}
         */
        CplxDatatableService.prototype.crear_paginacion = /**
         * @param {?} totalitems
         * @param {?} paginaactual
         * @param {?} porpagina
         * @return {?}
         */
            function (totalitems, paginaactual, porpagina) {
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
            };
        /**
         * @param {?} totalitems
         * @param {?} porpagina
         * @param {?} paginactual
         * @param {?} paginasmostrar
         * @return {?}
         */
        CplxDatatableService.prototype.getPages = /**
         * @param {?} totalitems
         * @param {?} porpagina
         * @param {?} paginactual
         * @param {?} paginasmostrar
         * @return {?}
         */
            function (totalitems, porpagina, paginactual, paginasmostrar) {
                /** @type {?} */
                var c = Math.ceil(totalitems / porpagina);
                /** @type {?} */
                var p = paginactual || 1;
                /** @type {?} */
                var pagesToShow = paginasmostrar || 9;
                /** @type {?} */
                var pages = [];
                pages.push(p);
                /** @type {?} */
                var times = pagesToShow - 1;
                for (var i = 0; i < times; i++) {
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
                pages.sort(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) { return a - b; }));
                return pages;
            };
        CplxDatatableService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CplxDatatableService.ctorParameters = function () { return []; };
        /** @nocollapse */ CplxDatatableService.ngInjectableDef = i0.defineInjectable({ factory: function CplxDatatableService_Factory() { return new CplxDatatableService(); }, token: CplxDatatableService, providedIn: "root" });
        return CplxDatatableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CplxDatatableComponent = /** @class */ (function () {
        function CplxDatatableComponent(_cplxdatatableservice) {
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
        CplxDatatableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        CplxDatatableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this.loading = true;
                this.ls_paginas = util.isNullOrUndefined(this.pages) ? this.defaultpages : this.pages;
                if (util.isNullOrUndefined(this.config)) {
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
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CplxDatatableComponent.prototype.search_data = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                this.searchparam = {};
                this.content.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    _this.searchparam[element.toString()] = value;
                }));
                return this.searchparam;
            };
        /**
         * @param {?} totalitem
         * @param {?} pagina
         * @param {?} porpagina
         * @return {?}
         */
        CplxDatatableComponent.prototype.go_page = /**
         * @param {?} totalitem
         * @param {?} pagina
         * @param {?} porpagina
         * @return {?}
         */
            function (totalitem, pagina, porpagina) {
                this.paginacion.actual = pagina;
                this.paginacion = this._cplxdatatableservice.crear_paginacion(totalitem, pagina, porpagina);
                this.itemlistcurrentpage = this.itemlistpaginates["pagina" + pagina];
            };
        /**
         * @param {?} porpagina
         * @return {?}
         */
        CplxDatatableComponent.prototype.go_porpage = /**
         * @param {?} porpagina
         * @return {?}
         */
            function (porpagina) {
                this.loading = true;
                this.paginacion.porpagina = porpagina;
                this.itemlistpaginates = {};
                this.itemlistcurrentpage = [];
                this.paginacion = this._cplxdatatableservice.crear_paginacion(this.itemlist.length, 1, porpagina);
                this.itemlistpaginates = this._cplxdatatableservice.crear_data_paginado(this.itemlist, this.paginacion.totalpaginas, this.paginacion.porpagina);
                this.itemlistcurrentpage = this.itemlistpaginates["pagina" + this.paginacion.actual];
                this.loading = false;
            };
        CplxDatatableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cplx-datatable',
                        template: "<div class=\"row align-items-center\">\r\n\t<div class=\"col-sm-6\">\r\n\t\t<input *ngIf=\"config.search\" type=\"text\" placeholder=\"Buscar\" [(ngModel)]=\"search\"\r\n\t\t\tclass=\"form-control form-control-sm\">\r\n\t</div>\r\n\t<div class=\"col-sm-6\">\r\n\t\t<div class=\"d-flex flex-row py-2 align-items-center bg-sura\" *ngIf=\"config.pagination\">\r\n\t\t\t<div class=\"ml-auto\" *ngIf=\"paginacion.totalitem > 0\">\r\n\t\t\t\t<ul class=\"pagination pagination-sm m-0 align-items-center\">\r\n\t\t\t\t\t<li class=\"list-inline-item text-primary\">\r\n\t\t\t\t\t\tdesde {{ paginacion.desde }} al {{ paginacion.hasta }} de {{ paginacion.totalitem }}</li>\r\n\t\t\t\t\t<li class=\"list-inline-item text-primary pr-4\">\r\n\t\t\t\t\t\t| {{paginacion.totalpaginas + ' P\u00E1ginas'}}\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li [ngClass]=\"{'disabled': paginacion.actual == 1}\"\r\n\t\t\t\t\t\t(click)=\"go_page(paginacion.totalitem,paginacion.atras,paginacion.porpagina)\" class=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li (click)=\"pag == paginacion.actual ? '' : go_page(paginacion.totalitem,pag,paginacion.porpagina)\"\r\n\t\t\t\t\t\tclass=\"page-item\" [ngClass]=\"{'active': pag == paginacion.actual}\"\r\n\t\t\t\t\t\t*ngFor=\"let pag of paginacion?.paginas\">\r\n\t\t\t\t\t\t<a class=\"page-link\">{{pag}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li [ngClass]=\"{'disabled' : paginacion.actual == paginacion.totalpaginas}\"\r\n\t\t\t\t\t\t(click)=\"go_page(paginacion.totalitem,paginacion.siguiente,paginacion.porpagina)\"\r\n\t\t\t\t\t\tclass=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"pl-5\" *ngIf=\"paginacion.totalitem > 0\">\r\n\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t<a class=\"btn btn-success btn-sm dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\"\r\n\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t{{paginacion.porpagina}} P\u00E1ginas\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t<a class=\"dropdown-item\" *ngFor=\"let pag of pages\" (click)=\"go_porpage(pag)\">{{pag}} P\u00E1ginas</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n\t<table class=\"table table-sura table-bordered table-hover\">\r\n\t\t<thead class=\"table-thead\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th class=\"text-center w-5\" *ngFor=\"let cabecera of header\"> {{cabecera}}</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody *ngIf=\"!loading && itemlistcurrentpage?.length\">\r\n\t\t\t<tr *ngFor=\"let item of itemlistcurrentpage | datatablepipe : search != '' ? search_data(search) :''\">\r\n\t\t\t\t<td *ngFor=\"let c of content\">{{item[c]}}</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n\t<div class=\"w-100 text-center text-bold-sura\" *ngIf=\"!itemlistcurrentpage?.length || loading\"> <i\r\n\t\t\tclass=\"fa fa-spin fa-pulse\"></i>\r\n\t\t<i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse\"></i>\r\n\t\t{{loading ? 'CARGANDO ...' : (!itemlistcurrentpage?.length ? '-- No se encontraron registros --' : '')}}\r\n\t</div>\r\n</div>\r\n",
                        styles: [".pagination .page-item.active a{color:#fff!important;background-color:#0039ae!important;font-weight:700}.dropdown .dropdown-menu{box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);-moz-box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);-webkit-box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);transition:.3s;font-size:14px;max-height:0;display:block;overflow:hidden;opacity:0}.dropdown:hover .dropdown-menu{max-height:250px;opacity:1}.dropdown-menu{margin:0!important;border-radius:0!important;font-size:13px!important}.text-bold-sura{color:#0039ae!important;font-weight:700!important;font-family:'Trebuchet MS'!important}.text-bold{font-weight:700!important}.text-sura{font-size:12px!important;color:#0039ae!important;font-family:'Trebuchet MS'!important}.bg-sura{background-color:#eaf0f8!important;font-family:'Trebuchet MS'!important}.col-form-label{font-size:13px!important;line-height:1.5!important;color:#0039ae!important;font-family:'Trebuchet MS'}.table thead th{color:#0039a6!important;background-color:#eaf0f8!important;font-size:10px!important}.table.table-sura{border-top:1px solid silver!important;border-left:1px solid silver!important}.table td,.table th{padding:.75rem;font-size:11px}.table td{color:#706f6f!important}.table-active td{color:#0039a6!important;background-color:#e3d829!important;font-weight:700!important}.texto{font-size:10px;font-family:'Trebuchet MS'!important;text-align:justify;text-decoration:none}.table-bordered td,.table-bordered th{font-family:'Trebuchet MS'}"]
                    }] }
        ];
        /** @nocollapse */
        CplxDatatableComponent.ctorParameters = function () {
            return [
                { type: CplxDatatableService }
            ];
        };
        CplxDatatableComponent.propDecorators = {
            itemlist: [{ type: i0.Input }],
            header: [{ type: i0.Input }],
            content: [{ type: i0.Input }],
            loading: [{ type: i0.Input }],
            search: [{ type: i0.Input }],
            config: [{ type: i0.Input }],
            pages: [{ type: i0.Input }]
        };
        return CplxDatatableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchPipe = /** @class */ (function () {
        function SearchPipe() {
        }
        /**
         * @param {?} items
         * @param {?} filter
         * @return {?}
         */
        SearchPipe.prototype.transform = /**
         * @param {?} items
         * @param {?} filter
         * @return {?}
         */
            function (items, filter) {
                if (!filter)
                    return items;
                if (util.isNullOrUndefined(filter) || filter == "")
                    return items;
                if (!Array.isArray(items))
                    return items;
                if (filter && Array.isArray(items)) {
                    /** @type {?} */
                    var filterKeys_1 = Object.keys(filter);
                    return items.filter(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return filterKeys_1.some(( /**
                         * @param {?} keyName
                         * @return {?}
                         */function (keyName) {
                            return new RegExp(String(filter[keyName]).trim(), 'gi').test(item[keyName]) || filter[keyName] == "";
                        }));
                    }));
                }
            };
        SearchPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'datatablepipe'
                    },] }
        ];
        return SearchPipe;
    }());
    var CplxDatatableModule = /** @class */ (function () {
        function CplxDatatableModule() {
        }
        CplxDatatableModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CplxDatatableComponent, SearchPipe],
                        imports: [common.CommonModule, forms.FormsModule, forms.ReactiveFormsModule],
                        exports: [CplxDatatableComponent],
                        providers: [CplxDatatableService]
                    },] }
        ];
        return CplxDatatableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Paginacion = Paginacion;
    exports.ConfigDataTable = ConfigDataTable;
    exports.CplxDatatableService = CplxDatatableService;
    exports.CplxDatatableComponent = CplxDatatableComponent;
    exports.SearchPipe = SearchPipe;
    exports.CplxDatatableModule = CplxDatatableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=cplx-datatable.umd.js.map