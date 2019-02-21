/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Paginacion, CplxDatatableService, ConfigDataTable } from './cplx-datatable.service';
import { isNullOrUndefined } from 'util';
export class CplxDatatableComponent {
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
if (false) {
    /** @type {?} */
    CplxDatatableComponent.prototype.itemlist;
    /** @type {?} */
    CplxDatatableComponent.prototype.header;
    /** @type {?} */
    CplxDatatableComponent.prototype.content;
    /** @type {?} */
    CplxDatatableComponent.prototype.loading;
    /** @type {?} */
    CplxDatatableComponent.prototype.search;
    /** @type {?} */
    CplxDatatableComponent.prototype.config;
    /** @type {?} */
    CplxDatatableComponent.prototype.pages;
    /** @type {?} */
    CplxDatatableComponent.prototype.paginacion;
    /** @type {?} */
    CplxDatatableComponent.prototype.searchparam;
    /** @type {?} */
    CplxDatatableComponent.prototype.itemlistpaginates;
    /** @type {?} */
    CplxDatatableComponent.prototype.itemlistcurrentpage;
    /** @type {?} */
    CplxDatatableComponent.prototype.ls_paginas;
    /** @type {?} */
    CplxDatatableComponent.prototype.defaultpages;
    /**
     * @type {?}
     * @private
     */
    CplxDatatableComponent.prototype._cplxdatatableservice;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1kYXRhdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1kYXRhdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPekMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQVVsQyxZQUFvQixxQkFBMkM7UUFBM0MsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUp0RCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBTTdCLGVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTlCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUd2QixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTFCLGlCQUFZLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQVRrQyxDQUFDOzs7O0lBV3BFLFFBQVEsS0FBSyxDQUFDOzs7OztJQUVkLFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVqRixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDO1lBQ2xDLElBQUksQ0FB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QztJQUN0QixDQUFDOzs7WUF2RUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDZyR0FBOEM7O2FBRTlDOzs7O1lBUG9CLG9CQUFvQjs7O3VCQVV2QyxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLOzs7O0lBTk4sMENBQXlCOztJQUN6Qix3Q0FBMEI7O0lBQzFCLHlDQUEyQjs7SUFDM0IseUNBQTBCOztJQUMxQix3Q0FBNkI7O0lBQzdCLHdDQUF3Qzs7SUFDeEMsdUNBQXlCOztJQUl6Qiw0Q0FBOEI7O0lBQzlCLDZDQUFzQjs7SUFDdEIsbURBQXVCOztJQUN2QixxREFBMkI7O0lBRTNCLDRDQUEwQjs7SUFFMUIsOENBQWlDOzs7OztJQVRyQix1REFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hY2lvbiwgQ3BseERhdGF0YWJsZVNlcnZpY2UsIENvbmZpZ0RhdGFUYWJsZSB9IGZyb20gJy4vY3BseC1kYXRhdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gJ3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjcGx4LWRhdGF0YWJsZScsXG5cdHRlbXBsYXRlVXJsOiAnLi9jcGx4LWRhdGF0YWJsZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2NwbHgtZGF0YXRhYmxlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDcGx4RGF0YXRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpIGl0ZW1saXN0OiBhbnlbXTtcblx0QElucHV0KCkgaGVhZGVyOiBzdHJpbmdbXTtcblx0QElucHV0KCkgY29udGVudDogc3RyaW5nW107XG5cdEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHNlYXJjaDogc3RyaW5nID0gXCJcIjtcblx0QElucHV0KCkgY29uZmlnOiBDb25maWdEYXRhVGFibGUgfCBudWxsO1xuXHRASW5wdXQoKSBwYWdlczogbnVtYmVyW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY3BseGRhdGF0YWJsZXNlcnZpY2U6IENwbHhEYXRhdGFibGVTZXJ2aWNlKSB7IH1cblxuXHRwYWdpbmFjaW9uID0gbmV3IFBhZ2luYWNpb24oKTtcblx0c2VhcmNocGFyYW06IGFueSB8IHt9O1xuXHRpdGVtbGlzdHBhZ2luYXRlcyA9IHt9O1xuXHRpdGVtbGlzdGN1cnJlbnRwYWdlOiBhbnlbXTtcblxuXHRsc19wYWdpbmFzOiBudW1iZXJbXSA9IFtdO1xuXG5cdGRlZmF1bHRwYWdlcyA9IFsyMCwgMzAsIDUwLCAxMDBdO1xuXG5cdG5nT25Jbml0KCkgeyB9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHRoaXMubG9hZGluZyA9IHRydWU7XG5cdFx0dGhpcy5sc19wYWdpbmFzID0gaXNOdWxsT3JVbmRlZmluZWQodGhpcy5wYWdlcykgPyB0aGlzLmRlZmF1bHRwYWdlcyA6IHRoaXMucGFnZXM7XG5cblx0XHRpZiAoaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jb25maWcpKSB7XG5cdFx0XHR0aGlzLmNvbmZpZyA9IG5ldyBDb25maWdEYXRhVGFibGU7XG5cdFx0XHR0aGlzLml0ZW1saXN0Y3VycmVudHBhZ2UgPSB0aGlzLml0ZW1saXN0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5jb25maWcucGFnaW5hdGlvbikge1xuXHRcdFx0XHR0aGlzLnBhZ2luYWNpb24uYWN0dWFsID0gMTtcblx0XHRcdFx0dGhpcy5wYWdpbmFjaW9uLnBhZ2luYXNtb3N0cmFyID0gMztcblx0XHRcdFx0dGhpcy5wYWdpbmFjaW9uLnBvcnBhZ2luYSA9IDEwO1xuXHRcdFx0XHR0aGlzLnBhZ2luYWNpb24gPSB0aGlzLl9jcGx4ZGF0YXRhYmxlc2VydmljZS5jcmVhcl9wYWdpbmFjaW9uKHRoaXMuaXRlbWxpc3QubGVuZ3RoLCB0aGlzLnBhZ2luYWNpb24uYWN0dWFsLCB0aGlzLnBhZ2luYWNpb24ucG9ycGFnaW5hKTtcblx0XHRcdFx0dGhpcy5pdGVtbGlzdHBhZ2luYXRlcyA9IHRoaXMuX2NwbHhkYXRhdGFibGVzZXJ2aWNlLmNyZWFyX2RhdGFfcGFnaW5hZG8odGhpcy5pdGVtbGlzdCwgdGhpcy5wYWdpbmFjaW9uLnRvdGFscGFnaW5hcywgdGhpcy5wYWdpbmFjaW9uLnBvcnBhZ2luYSk7XG5cdFx0XHRcdHRoaXMuZ29fcGFnZSh0aGlzLnBhZ2luYWNpb24udG90YWxpdGVtLCB0aGlzLnBhZ2luYWNpb24uYWN0dWFsLCB0aGlzLnBhZ2luYWNpb24ucG9ycGFnaW5hKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cdH1cblxuXHRzZWFyY2hfZGF0YSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5zZWFyY2hwYXJhbSA9IHt9O1xuXHRcdHRoaXMuY29udGVudC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0dGhpcy5zZWFyY2hwYXJhbVtlbGVtZW50LnRvU3RyaW5nKCldID0gdmFsdWU7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuc2VhcmNocGFyYW07XG5cdH1cblxuXHRnb19wYWdlKHRvdGFsaXRlbTogbnVtYmVyLCBwYWdpbmE6IG51bWJlciwgcG9ycGFnaW5hOiBudW1iZXIpIHtcblx0XHR0aGlzLnBhZ2luYWNpb24uYWN0dWFsID0gcGFnaW5hO1xuXHRcdHRoaXMucGFnaW5hY2lvbiA9IHRoaXMuX2NwbHhkYXRhdGFibGVzZXJ2aWNlLmNyZWFyX3BhZ2luYWNpb24odG90YWxpdGVtLCBwYWdpbmEsIHBvcnBhZ2luYSlcblx0XHR0aGlzLml0ZW1saXN0Y3VycmVudHBhZ2UgPSB0aGlzLml0ZW1saXN0cGFnaW5hdGVzW1wicGFnaW5hXCIgKyBwYWdpbmFdO1xuXHR9XG5cblx0Z29fcG9ycGFnZShwb3JwYWdpbmE6IG51bWJlcikge1xuXHRcdHRoaXMubG9hZGluZyA9IHRydWU7XG5cdFx0dGhpcy5wYWdpbmFjaW9uLnBvcnBhZ2luYSA9IHBvcnBhZ2luYTtcblx0XHR0aGlzLml0ZW1saXN0cGFnaW5hdGVzID0ge307XG5cdFx0dGhpcy5pdGVtbGlzdGN1cnJlbnRwYWdlID0gW107XG5cdFx0dGhpcy5wYWdpbmFjaW9uID0gdGhpcy5fY3BseGRhdGF0YWJsZXNlcnZpY2UuY3JlYXJfcGFnaW5hY2lvbih0aGlzLml0ZW1saXN0Lmxlbmd0aCwgMSwgcG9ycGFnaW5hKTtcblx0XHR0aGlzLml0ZW1saXN0cGFnaW5hdGVzID0gdGhpcy5fY3BseGRhdGF0YWJsZXNlcnZpY2UuY3JlYXJfZGF0YV9wYWdpbmFkbyh0aGlzLml0ZW1saXN0LCB0aGlzLnBhZ2luYWNpb24udG90YWxwYWdpbmFzLCB0aGlzLnBhZ2luYWNpb24ucG9ycGFnaW5hKTtcblx0XHR0aGlzLml0ZW1saXN0Y3VycmVudHBhZ2UgPSB0aGlzLml0ZW1saXN0cGFnaW5hdGVzW1wicGFnaW5hXCIgKyB0aGlzLnBhZ2luYWNpb24uYWN0dWFsXTtcblx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0fVxuXG59XG4iXX0=