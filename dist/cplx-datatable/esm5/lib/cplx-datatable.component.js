/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Paginacion, CplxDatatableService, ConfigDataTable } from './cplx-datatable.service';
import { isNullOrUndefined } from 'util';
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
    CplxDatatableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cplx-datatable',
                    template: "<div class=\"row align-items-center\">\r\n\t<div class=\"col-sm-6\">\r\n\t\t<input *ngIf=\"config.search\" type=\"text\" placeholder=\"Buscar\" [(ngModel)]=\"search\"\r\n\t\t\tclass=\"form-control form-control-sm\">\r\n\t</div>\r\n\t<div class=\"col-sm-6\">\r\n\t\t<div class=\"d-flex flex-row py-2 align-items-center bg-sura\" *ngIf=\"config.pagination\">\r\n\t\t\t<div class=\"ml-auto\" *ngIf=\"paginacion.totalitem > 0\">\r\n\t\t\t\t<ul class=\"pagination pagination-sm m-0 align-items-center\">\r\n\t\t\t\t\t<li class=\"list-inline-item text-primary\">\r\n\t\t\t\t\t\tdesde {{ paginacion.desde }} al {{ paginacion.hasta }} de {{ paginacion.totalitem }}</li>\r\n\t\t\t\t\t<li class=\"list-inline-item text-primary pr-4\">\r\n\t\t\t\t\t\t| {{paginacion.totalpaginas + ' P\u00E1ginas'}}\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li [ngClass]=\"{'disabled': paginacion.actual == 1}\"\r\n\t\t\t\t\t\t(click)=\"go_page(paginacion.totalitem,paginacion.atras,paginacion.porpagina)\" class=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li (click)=\"pag == paginacion.actual ? '' : go_page(paginacion.totalitem,pag,paginacion.porpagina)\"\r\n\t\t\t\t\t\tclass=\"page-item\" [ngClass]=\"{'active': pag == paginacion.actual}\"\r\n\t\t\t\t\t\t*ngFor=\"let pag of paginacion?.paginas\">\r\n\t\t\t\t\t\t<a class=\"page-link\">{{pag}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li [ngClass]=\"{'disabled' : paginacion.actual == paginacion.totalpaginas}\"\r\n\t\t\t\t\t\t(click)=\"go_page(paginacion.totalitem,paginacion.siguiente,paginacion.porpagina)\"\r\n\t\t\t\t\t\tclass=\"page-item\">\r\n\t\t\t\t\t\t<a class=\"page-link\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"pl-5\" *ngIf=\"paginacion.totalitem > 0\">\r\n\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t<a class=\"btn btn-success btn-sm dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\"\r\n\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t{{paginacion.porpagina}} P\u00E1ginas\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t<a class=\"dropdown-item\" *ngFor=\"let pag of pages\" (click)=\"go_porpage(pag)\">{{pag}} P\u00E1ginas</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n\t<table class=\"table table-sura table-bordered table-hover\">\r\n\t\t<thead class=\"table-thead\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th class=\"text-center w-5\" *ngFor=\"let cabecera of header\"> {{cabecera}}</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody *ngIf=\"!loading && itemlistcurrentpage?.length\">\r\n\t\t\t<tr *ngFor=\"let item of itemlistcurrentpage | datatablepipe : search != '' ? search_data(search) :''\">\r\n\t\t\t\t<td *ngFor=\"let c of content\">{{item[c]}}</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n\t<div class=\"w-100 text-center text-bold-sura\" *ngIf=\"!itemlistcurrentpage?.length || loading\"> <i\r\n\t\t\tclass=\"fa fa-spin fa-pulse\"></i>\r\n\t\t<i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse\"></i>\r\n\t\t{{loading ? 'CARGANDO ...' : (!itemlistcurrentpage?.length ? '-- No se encontraron registros --' : '')}}\r\n\t</div>\r\n</div>\r\n",
                    styles: [".pagination .page-item.active a{color:#fff!important;background-color:#0039ae!important;font-weight:700}.dropdown .dropdown-menu{box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);-moz-box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);-webkit-box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);transition:.3s;font-size:14px;max-height:0;display:block;overflow:hidden;opacity:0}.dropdown:hover .dropdown-menu{max-height:250px;opacity:1}.dropdown-menu{margin:0!important;border-radius:0!important;font-size:13px!important}.text-bold-sura{color:#0039ae!important;font-weight:700!important;font-family:'Trebuchet MS'!important}.text-bold{font-weight:700!important}.text-sura{font-size:12px!important;color:#0039ae!important;font-family:'Trebuchet MS'!important}.bg-sura{background-color:#eaf0f8!important;font-family:'Trebuchet MS'!important}.col-form-label{font-size:13px!important;line-height:1.5!important;color:#0039ae!important;font-family:'Trebuchet MS'}.table thead th{color:#0039a6!important;background-color:#eaf0f8!important;font-size:10px!important}.table.table-sura{border-top:1px solid silver!important;border-left:1px solid silver!important}.table td,.table th{padding:.75rem;font-size:11px}.table td{color:#706f6f!important}.table-active td{color:#0039a6!important;background-color:#e3d829!important;font-weight:700!important}.texto{font-size:10px;font-family:'Trebuchet MS'!important;text-align:justify;text-decoration:none}.table-bordered td,.table-bordered th{font-family:'Trebuchet MS'}"]
                }] }
    ];
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
    return CplxDatatableComponent;
}());
export { CplxDatatableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1kYXRhdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvY3BseC1kYXRhdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFekM7SUFlQyxnQ0FBb0IscUJBQTJDO1FBQTNDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFKdEQsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQU03QixlQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUU5QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFHdkIsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUUxQixpQkFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFUa0MsQ0FBQzs7OztJQVdwRSx5Q0FBUTs7O0lBQVIsY0FBYSxDQUFDOzs7OztJQUVkLDRDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVqRixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3pDO2FBQU07WUFDTixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2SSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDaEosSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNGO1NBQ0Q7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQXpCLGlCQU1DO1FBTEEsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7SUFFRCx3Q0FBTzs7Ozs7O0lBQVAsVUFBUSxTQUFpQixFQUFFLE1BQWMsRUFBRSxTQUFpQjtRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUMzRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVELDJDQUFVOzs7O0lBQVYsVUFBVyxTQUFpQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoSixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7O2dCQXZFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsNnJHQUE4Qzs7aUJBRTlDOzs7O2dCQVBvQixvQkFBb0I7OzsyQkFVdkMsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7SUE0RFAsNkJBQUM7Q0FBQSxBQXpFRCxJQXlFQztTQXBFWSxzQkFBc0I7OztJQUVsQywwQ0FBeUI7O0lBQ3pCLHdDQUEwQjs7SUFDMUIseUNBQTJCOztJQUMzQix5Q0FBMEI7O0lBQzFCLHdDQUE2Qjs7SUFDN0Isd0NBQXdDOztJQUN4Qyx1Q0FBeUI7O0lBSXpCLDRDQUE4Qjs7SUFDOUIsNkNBQXNCOztJQUN0QixtREFBdUI7O0lBQ3ZCLHFEQUEyQjs7SUFFM0IsNENBQTBCOztJQUUxQiw4Q0FBaUM7Ozs7O0lBVHJCLHVEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmFjaW9uLCBDcGx4RGF0YXRhYmxlU2VydmljZSwgQ29uZmlnRGF0YVRhYmxlIH0gZnJvbSAnLi9jcGx4LWRhdGF0YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndXRpbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NwbHgtZGF0YXRhYmxlJyxcblx0dGVtcGxhdGVVcmw6ICcuL2NwbHgtZGF0YXRhYmxlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vY3BseC1kYXRhdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENwbHhEYXRhdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KCkgaXRlbWxpc3Q6IGFueVtdO1xuXHRASW5wdXQoKSBoZWFkZXI6IHN0cmluZ1tdO1xuXHRASW5wdXQoKSBjb250ZW50OiBzdHJpbmdbXTtcblx0QElucHV0KCkgbG9hZGluZzogYm9vbGVhbjtcblx0QElucHV0KCkgc2VhcmNoOiBzdHJpbmcgPSBcIlwiO1xuXHRASW5wdXQoKSBjb25maWc6IENvbmZpZ0RhdGFUYWJsZSB8IG51bGw7XG5cdEBJbnB1dCgpIHBhZ2VzOiBudW1iZXJbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9jcGx4ZGF0YXRhYmxlc2VydmljZTogQ3BseERhdGF0YWJsZVNlcnZpY2UpIHsgfVxuXG5cdHBhZ2luYWNpb24gPSBuZXcgUGFnaW5hY2lvbigpO1xuXHRzZWFyY2hwYXJhbTogYW55IHwge307XG5cdGl0ZW1saXN0cGFnaW5hdGVzID0ge307XG5cdGl0ZW1saXN0Y3VycmVudHBhZ2U6IGFueVtdO1xuXG5cdGxzX3BhZ2luYXM6IG51bWJlcltdID0gW107XG5cblx0ZGVmYXVsdHBhZ2VzID0gWzIwLCAzMCwgNTAsIDEwMF07XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcblx0XHR0aGlzLmxzX3BhZ2luYXMgPSBpc051bGxPclVuZGVmaW5lZCh0aGlzLnBhZ2VzKSA/IHRoaXMuZGVmYXVsdHBhZ2VzIDogdGhpcy5wYWdlcztcblxuXHRcdGlmIChpc051bGxPclVuZGVmaW5lZCh0aGlzLmNvbmZpZykpIHtcblx0XHRcdHRoaXMuY29uZmlnID0gbmV3IENvbmZpZ0RhdGFUYWJsZTtcblx0XHRcdHRoaXMuaXRlbWxpc3RjdXJyZW50cGFnZSA9IHRoaXMuaXRlbWxpc3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uKSB7XG5cdFx0XHRcdHRoaXMucGFnaW5hY2lvbi5hY3R1YWwgPSAxO1xuXHRcdFx0XHR0aGlzLnBhZ2luYWNpb24ucGFnaW5hc21vc3RyYXIgPSAzO1xuXHRcdFx0XHR0aGlzLnBhZ2luYWNpb24ucG9ycGFnaW5hID0gMTA7XG5cdFx0XHRcdHRoaXMucGFnaW5hY2lvbiA9IHRoaXMuX2NwbHhkYXRhdGFibGVzZXJ2aWNlLmNyZWFyX3BhZ2luYWNpb24odGhpcy5pdGVtbGlzdC5sZW5ndGgsIHRoaXMucGFnaW5hY2lvbi5hY3R1YWwsIHRoaXMucGFnaW5hY2lvbi5wb3JwYWdpbmEpO1xuXHRcdFx0XHR0aGlzLml0ZW1saXN0cGFnaW5hdGVzID0gdGhpcy5fY3BseGRhdGF0YWJsZXNlcnZpY2UuY3JlYXJfZGF0YV9wYWdpbmFkbyh0aGlzLml0ZW1saXN0LCB0aGlzLnBhZ2luYWNpb24udG90YWxwYWdpbmFzLCB0aGlzLnBhZ2luYWNpb24ucG9ycGFnaW5hKTtcblx0XHRcdFx0dGhpcy5nb19wYWdlKHRoaXMucGFnaW5hY2lvbi50b3RhbGl0ZW0sIHRoaXMucGFnaW5hY2lvbi5hY3R1YWwsIHRoaXMucGFnaW5hY2lvbi5wb3JwYWdpbmEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHNlYXJjaF9kYXRhKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLnNlYXJjaHBhcmFtID0ge307XG5cdFx0dGhpcy5jb250ZW50LmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHR0aGlzLnNlYXJjaHBhcmFtW2VsZW1lbnQudG9TdHJpbmcoKV0gPSB2YWx1ZTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hwYXJhbTtcblx0fVxuXG5cdGdvX3BhZ2UodG90YWxpdGVtOiBudW1iZXIsIHBhZ2luYTogbnVtYmVyLCBwb3JwYWdpbmE6IG51bWJlcikge1xuXHRcdHRoaXMucGFnaW5hY2lvbi5hY3R1YWwgPSBwYWdpbmE7XG5cdFx0dGhpcy5wYWdpbmFjaW9uID0gdGhpcy5fY3BseGRhdGF0YWJsZXNlcnZpY2UuY3JlYXJfcGFnaW5hY2lvbih0b3RhbGl0ZW0sIHBhZ2luYSwgcG9ycGFnaW5hKVxuXHRcdHRoaXMuaXRlbWxpc3RjdXJyZW50cGFnZSA9IHRoaXMuaXRlbWxpc3RwYWdpbmF0ZXNbXCJwYWdpbmFcIiArIHBhZ2luYV07XG5cdH1cblxuXHRnb19wb3JwYWdlKHBvcnBhZ2luYTogbnVtYmVyKSB7XG5cdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcblx0XHR0aGlzLnBhZ2luYWNpb24ucG9ycGFnaW5hID0gcG9ycGFnaW5hO1xuXHRcdHRoaXMuaXRlbWxpc3RwYWdpbmF0ZXMgPSB7fTtcblx0XHR0aGlzLml0ZW1saXN0Y3VycmVudHBhZ2UgPSBbXTtcblx0XHR0aGlzLnBhZ2luYWNpb24gPSB0aGlzLl9jcGx4ZGF0YXRhYmxlc2VydmljZS5jcmVhcl9wYWdpbmFjaW9uKHRoaXMuaXRlbWxpc3QubGVuZ3RoLCAxLCBwb3JwYWdpbmEpO1xuXHRcdHRoaXMuaXRlbWxpc3RwYWdpbmF0ZXMgPSB0aGlzLl9jcGx4ZGF0YXRhYmxlc2VydmljZS5jcmVhcl9kYXRhX3BhZ2luYWRvKHRoaXMuaXRlbWxpc3QsIHRoaXMucGFnaW5hY2lvbi50b3RhbHBhZ2luYXMsIHRoaXMucGFnaW5hY2lvbi5wb3JwYWdpbmEpO1xuXHRcdHRoaXMuaXRlbWxpc3RjdXJyZW50cGFnZSA9IHRoaXMuaXRlbWxpc3RwYWdpbmF0ZXNbXCJwYWdpbmFcIiArIHRoaXMucGFnaW5hY2lvbi5hY3R1YWxdO1xuXHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHR9XG5cbn1cbiJdfQ==