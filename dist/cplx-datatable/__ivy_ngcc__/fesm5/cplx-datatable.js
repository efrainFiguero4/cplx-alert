import { Injectable, NgModule, Component, Input, Pipe, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { isNullOrUndefined } from 'util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';

function CplxDatatableComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 10);
    ɵngcc0.ɵɵlistener("ngModelChange", function CplxDatatableComponent_input_2_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.search = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngModel", ctx_r0.search);
} }
var _c0 = function (a0) { return { "active": a0 }; };
function CplxDatatableComponent_div_4_div_1_li_9_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 18);
    ɵngcc0.ɵɵlistener("click", function CplxDatatableComponent_div_4_div_1_li_9_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); var pag_r10 = ctx.$implicit; var ctx_r11 = ɵngcc0.ɵɵnextContext(3); return pag_r10 == ctx_r11.paginacion.actual ? "" : ctx_r11.go_page(ctx_r11.paginacion.totalitem, pag_r10, ctx_r11.paginacion.porpagina); });
    ɵngcc0.ɵɵelementStart(1, "a", 19);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var pag_r10 = ctx.$implicit;
    var ctx_r9 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c0, pag_r10 == ctx_r9.paginacion.actual));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(pag_r10);
} }
var _c1 = function (a0) { return { "disabled": a0 }; };
function CplxDatatableComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵelementStart(1, "ul", 15);
    ɵngcc0.ɵɵelementStart(2, "li", 16);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "li", 17);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "li", 18);
    ɵngcc0.ɵɵlistener("click", function CplxDatatableComponent_div_4_div_1_Template_li_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r14); var ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.go_page(ctx_r13.paginacion.totalitem, ctx_r13.paginacion.atras, ctx_r13.paginacion.porpagina); });
    ɵngcc0.ɵɵelementStart(7, "a", 19);
    ɵngcc0.ɵɵtext(8, "Previous");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(9, CplxDatatableComponent_div_4_div_1_li_9_Template, 3, 4, "li", 20);
    ɵngcc0.ɵɵelementStart(10, "li", 18);
    ɵngcc0.ɵɵlistener("click", function CplxDatatableComponent_div_4_div_1_Template_li_click_10_listener() { ɵngcc0.ɵɵrestoreView(_r14); var ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.go_page(ctx_r15.paginacion.totalitem, ctx_r15.paginacion.siguiente, ctx_r15.paginacion.porpagina); });
    ɵngcc0.ɵɵelementStart(11, "a", 19);
    ɵngcc0.ɵɵtext(12, "Next");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate3(" desde ", ctx_r7.paginacion.desde, " al ", ctx_r7.paginacion.hasta, " de ", ctx_r7.paginacion.totalitem, "");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" | ", ctx_r7.paginacion.totalpaginas + " P\u00E1ginas", " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c1, ctx_r7.paginacion.actual == 1));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r7.paginacion == null ? null : ctx_r7.paginacion.paginas);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(9, _c1, ctx_r7.paginacion.actual == ctx_r7.paginacion.totalpaginas));
} }
function CplxDatatableComponent_div_4_div_2_a_5_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 26);
    ɵngcc0.ɵɵlistener("click", function CplxDatatableComponent_div_4_div_2_a_5_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var pag_r17 = ctx.$implicit; var ctx_r18 = ɵngcc0.ɵɵnextContext(3); return ctx_r18.go_porpage(pag_r17); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var pag_r17 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", pag_r17, " P\u00E1ginas");
} }
function CplxDatatableComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 21);
    ɵngcc0.ɵɵelementStart(1, "div", 22);
    ɵngcc0.ɵɵelementStart(2, "a", 23);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 24);
    ɵngcc0.ɵɵtemplate(5, CplxDatatableComponent_div_4_div_2_a_5_Template, 2, 1, "a", 25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r8.paginacion.porpagina, " P\u00E1ginas ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r8.pages);
} }
function CplxDatatableComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵtemplate(1, CplxDatatableComponent_div_4_div_1_Template, 13, 11, "div", 12);
    ɵngcc0.ɵɵtemplate(2, CplxDatatableComponent_div_4_div_2_Template, 6, 2, "div", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.paginacion.totalitem > 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.paginacion.totalitem > 0);
} }
function CplxDatatableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 27);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cabecera_r20 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cabecera_r20, "");
} }
function CplxDatatableComponent_tbody_10_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var c_r24 = ctx.$implicit;
    var item_r22 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r22[c_r24]);
} }
function CplxDatatableComponent_tbody_10_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr");
    ɵngcc0.ɵɵtemplate(1, CplxDatatableComponent_tbody_10_tr_1_td_1_Template, 2, 1, "td", 28);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r21 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r21.content);
} }
function CplxDatatableComponent_tbody_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tbody");
    ɵngcc0.ɵɵtemplate(1, CplxDatatableComponent_tbody_10_tr_1_Template, 2, 1, "tr", 28);
    ɵngcc0.ɵɵpipe(2, "datatablepipe");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind2(2, 1, ctx_r3.itemlistcurrentpage, ctx_r3.search != "" ? ctx_r3.search_data(ctx_r3.search) : ""));
} }
function CplxDatatableComponent_div_11_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 32);
} }
function CplxDatatableComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 29);
    ɵngcc0.ɵɵelement(1, "i", 30);
    ɵngcc0.ɵɵtemplate(2, CplxDatatableComponent_div_11_i_2_Template, 1, 0, "i", 31);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.loading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.loading ? "CARGANDO ..." : !(ctx_r4.itemlistcurrentpage == null ? null : ctx_r4.itemlistcurrentpage.length) ? "-- No se encontraron registros --" : "", " ");
} }
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
        pages.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a - b; }));
        return pages;
    };
    /** @nocollapse */
    CplxDatatableService.ctorParameters = function () { return []; };
    /** @nocollapse */ CplxDatatableService.ngInjectableDef = defineInjectable({ factory: function CplxDatatableService_Factory() { return new CplxDatatableService(); }, token: CplxDatatableService, providedIn: "root" });
CplxDatatableService.ɵfac = function CplxDatatableService_Factory(t) { return new (t || CplxDatatableService)(); };
CplxDatatableService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CplxDatatableService, factory: function (t) { return CplxDatatableService.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CplxDatatableService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
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
        this.content.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
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
    /** @nocollapse */
    CplxDatatableComponent.ctorParameters = function () { return [
        { type: CplxDatatableService }
    ]; };
    CplxDatatableComponent.propDecorators = {
        itemlist: [{ type: Input }],
        header: [{ type: Input }],
        content: [{ type: Input }],
        loading: [{ type: Input }],
        search: [{ type: Input }],
        config: [{ type: Input }],
        pages: [{ type: Input }]
    };
CplxDatatableComponent.ɵfac = function CplxDatatableComponent_Factory(t) { return new (t || CplxDatatableComponent)(ɵngcc0.ɵɵdirectiveInject(CplxDatatableService)); };
CplxDatatableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CplxDatatableComponent, selectors: [["cplx-datatable"]], inputs: { search: "search", loading: "loading", config: "config", itemlist: "itemlist", header: "header", content: "content", pages: "pages" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 12, vars: 5, consts: [[1, "row", "align-items-center"], [1, "col-sm-6"], ["type", "text", "placeholder", "Buscar", "class", "form-control form-control-sm", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "d-flex flex-row py-2 align-items-center bg-sura", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-sura", "table-bordered", "table-hover"], [1, "table-thead"], ["class", "text-center w-5", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "w-100 text-center text-bold-sura", 4, "ngIf"], ["type", "text", "placeholder", "Buscar", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "d-flex", "flex-row", "py-2", "align-items-center", "bg-sura"], ["class", "ml-auto", 4, "ngIf"], ["class", "pl-5", 4, "ngIf"], [1, "ml-auto"], [1, "pagination", "pagination-sm", "m-0", "align-items-center"], [1, "list-inline-item", "text-primary"], [1, "list-inline-item", "text-primary", "pr-4"], [1, "page-item", 3, "ngClass", "click"], [1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pl-5"], [1, "dropdown"], ["role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-success", "btn-sm", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "click"], [1, "text-center", "w-5"], [4, "ngFor", "ngForOf"], [1, "w-100", "text-center", "text-bold-sura"], [1, "fa", "fa-spin", "fa-pulse"], ["class", "fa fa-spinner fa-pulse", 4, "ngIf"], [1, "fa", "fa-spinner", "fa-pulse"]], template: function CplxDatatableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, CplxDatatableComponent_input_2_Template, 1, 1, "input", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 1);
        ɵngcc0.ɵɵtemplate(4, CplxDatatableComponent_div_4_Template, 3, 2, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "table", 5);
        ɵngcc0.ɵɵelementStart(7, "thead", 6);
        ɵngcc0.ɵɵelementStart(8, "tr");
        ɵngcc0.ɵɵtemplate(9, CplxDatatableComponent_th_9_Template, 2, 1, "th", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, CplxDatatableComponent_tbody_10_Template, 3, 4, "tbody", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, CplxDatatableComponent_div_11_Template, 4, 2, "div", 9);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.search);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.pagination);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.header);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.loading && (ctx.itemlistcurrentpage == null ? null : ctx.itemlistcurrentpage.length));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !(ctx.itemlistcurrentpage == null ? null : ctx.itemlistcurrentpage.length) || ctx.loading);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.DefaultValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel, ɵngcc1.NgClass]; }, pipes: function () { return [SearchPipe]; }, styles: [".pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff!important;background-color:#0039ae!important;font-weight:700}.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);-moz-box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);-webkit-box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);transition:.3s;font-size:14px;max-height:0;display:block;overflow:hidden;opacity:0}.dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%]{max-height:250px;opacity:1}.dropdown-menu[_ngcontent-%COMP%]{margin:0!important;border-radius:0!important;font-size:13px!important}.text-bold-sura[_ngcontent-%COMP%]{color:#0039ae!important;font-weight:700!important;font-family:'Trebuchet MS'!important}.text-bold[_ngcontent-%COMP%]{font-weight:700!important}.text-sura[_ngcontent-%COMP%]{font-size:12px!important;color:#0039ae!important;font-family:'Trebuchet MS'!important}.bg-sura[_ngcontent-%COMP%]{background-color:#eaf0f8!important;font-family:'Trebuchet MS'!important}.col-form-label[_ngcontent-%COMP%]{font-size:13px!important;line-height:1.5!important;color:#0039ae!important;font-family:'Trebuchet MS'}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#0039a6!important;background-color:#eaf0f8!important;font-size:10px!important}.table.table-sura[_ngcontent-%COMP%]{border-top:1px solid silver!important;border-left:1px solid silver!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.75rem;font-size:11px}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#706f6f!important}.table-active[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#0039a6!important;background-color:#e3d829!important;font-weight:700!important}.texto[_ngcontent-%COMP%]{font-size:10px;font-family:'Trebuchet MS'!important;text-align:justify;text-decoration:none}.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-family:'Trebuchet MS'}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CplxDatatableComponent, [{
        type: Component,
        args: [{
                selector: 'cplx-datatable',
                template: "<div class=\"row align-items-center\">\r\n\t<div class=\"col-sm-6\">\r\n\t\t<input *ngIf=\"config.search\" type=\"text\" placeholder=\"Buscar\" [(ngModel)]=\"search\"\r\n\t\t\tclass=\"form-control form-control-sm\">\r\n\t</div>\r\n\t<div class=\"col-sm-6\">\r\n\t\t<div class=\"d-flex flex-row py-2 align-items-center bg-sura\" *ngIf=\"config.pagination\">\r\n\t\t\t<div class=\"ml-auto\" *ngIf=\"paginacion.totalitem > 0\">\r\n\t\t\t\t<ul class=\"pagination pagination-sm m-0 align-items-center\">\r\n\t\t\t\t\t<li class=\"list-inline-item text-primary\">\r\n\t\t\t\t\t\tdesde {{ paginacion.desde }} al {{ paginacion.hasta }} de {{ paginacion.totalitem }}</li>\r\n\t\t\t\t\t<li class=\"list-inline-item text-primary pr-4\">\r\n\t\t\t\t\t\t| {{paginacion.totalpaginas + ' P\u00E1ginas'}}\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li [ngClass]=\"{'disabled': paginacion.actual == 1}\"\r\n\t\t\t\t\t\t(click)=\"go_page(paginacion.totalitem,paginacion.atras,paginacion.porpagina)\" class=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li (click)=\"pag == paginacion.actual ? '' : go_page(paginacion.totalitem,pag,paginacion.porpagina)\"\r\n\t\t\t\t\t\tclass=\"page-item\" [ngClass]=\"{'active': pag == paginacion.actual}\"\r\n\t\t\t\t\t\t*ngFor=\"let pag of paginacion?.paginas\">\r\n\t\t\t\t\t\t<a class=\"page-link\">{{pag}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li [ngClass]=\"{'disabled' : paginacion.actual == paginacion.totalpaginas}\"\r\n\t\t\t\t\t\t(click)=\"go_page(paginacion.totalitem,paginacion.siguiente,paginacion.porpagina)\"\r\n\t\t\t\t\t\tclass=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"pl-5\" *ngIf=\"paginacion.totalitem > 0\">\r\n\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t<a class=\"btn btn-success btn-sm dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\"\r\n\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t{{paginacion.porpagina}} P\u00E1ginas\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t<a class=\"dropdown-item\" *ngFor=\"let pag of pages\" (click)=\"go_porpage(pag)\">{{pag}} P\u00E1ginas</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n\t<table class=\"table table-sura table-bordered table-hover\">\r\n\t\t<thead class=\"table-thead\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th class=\"text-center w-5\" *ngFor=\"let cabecera of header\"> {{cabecera}}</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody *ngIf=\"!loading && itemlistcurrentpage?.length\">\r\n\t\t\t<tr *ngFor=\"let item of itemlistcurrentpage | datatablepipe : search != '' ? search_data(search) :''\">\r\n\t\t\t\t<td *ngFor=\"let c of content\">{{item[c]}}</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n\t<div class=\"w-100 text-center text-bold-sura\" *ngIf=\"!itemlistcurrentpage?.length || loading\"> <i\r\n\t\t\tclass=\"fa fa-spin fa-pulse\"></i>\r\n\t\t<i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse\"></i>\r\n\t\t{{loading ? 'CARGANDO ...' : (!itemlistcurrentpage?.length ? '-- No se encontraron registros --' : '')}}\r\n\t</div>\r\n</div>\r\n",
                styles: [".pagination .page-item.active a{color:#fff!important;background-color:#0039ae!important;font-weight:700}.dropdown .dropdown-menu{box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);-moz-box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);-webkit-box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);transition:.3s;font-size:14px;max-height:0;display:block;overflow:hidden;opacity:0}.dropdown:hover .dropdown-menu{max-height:250px;opacity:1}.dropdown-menu{margin:0!important;border-radius:0!important;font-size:13px!important}.text-bold-sura{color:#0039ae!important;font-weight:700!important;font-family:'Trebuchet MS'!important}.text-bold{font-weight:700!important}.text-sura{font-size:12px!important;color:#0039ae!important;font-family:'Trebuchet MS'!important}.bg-sura{background-color:#eaf0f8!important;font-family:'Trebuchet MS'!important}.col-form-label{font-size:13px!important;line-height:1.5!important;color:#0039ae!important;font-family:'Trebuchet MS'}.table thead th{color:#0039a6!important;background-color:#eaf0f8!important;font-size:10px!important}.table.table-sura{border-top:1px solid silver!important;border-left:1px solid silver!important}.table td,.table th{padding:.75rem;font-size:11px}.table td{color:#706f6f!important}.table-active td{color:#0039a6!important;background-color:#e3d829!important;font-weight:700!important}.texto{font-size:10px;font-family:'Trebuchet MS'!important;text-align:justify;text-decoration:none}.table-bordered td,.table-bordered th{font-family:'Trebuchet MS'}"]
            }]
    }], function () { return [{ type: CplxDatatableService }]; }, { search: [{
            type: Input
        }], loading: [{
            type: Input
        }], config: [{
            type: Input
        }], itemlist: [{
            type: Input
        }], header: [{
            type: Input
        }], content: [{
            type: Input
        }], pages: [{
            type: Input
        }] }); })();
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
        if (isNullOrUndefined(filter) || filter == "")
            return items;
        if (!Array.isArray(items))
            return items;
        if (filter && Array.isArray(items)) {
            /** @type {?} */
            var filterKeys_1 = Object.keys(filter);
            return items.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return filterKeys_1.some((/**
                 * @param {?} keyName
                 * @return {?}
                 */
                function (keyName) {
                    return new RegExp(String(filter[keyName]).trim(), 'gi').test(item[keyName]) || filter[keyName] == "";
                }));
            }));
        }
    };
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "datatablepipe", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SearchPipe, [{
        type: Pipe,
        args: [{
                name: 'datatablepipe'
            }]
    }], function () { return []; }, null); })();
    return SearchPipe;
}());
var CplxDatatableModule = /** @class */ (function () {
    function CplxDatatableModule() {
    }
CplxDatatableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CplxDatatableModule });
CplxDatatableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CplxDatatableModule_Factory(t) { return new (t || CplxDatatableModule)(); }, providers: [CplxDatatableService], imports: [[CommonModule, FormsModule, ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CplxDatatableModule, { declarations: function () { return [CplxDatatableComponent,
        SearchPipe]; }, imports: function () { return [CommonModule, FormsModule, ReactiveFormsModule]; }, exports: function () { return [CplxDatatableComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CplxDatatableModule, [{
        type: NgModule,
        args: [{
                declarations: [CplxDatatableComponent, SearchPipe],
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                exports: [CplxDatatableComponent],
                providers: [CplxDatatableService]
            }]
    }], function () { return []; }, null); })();
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

export { Paginacion, ConfigDataTable, CplxDatatableService, CplxDatatableComponent, SearchPipe, CplxDatatableModule };


//# sourceMappingURL=cplx-datatable.js.map