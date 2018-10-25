/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * @record
 */
export function Alert() { }
/** @type {?|undefined} */
Alert.prototype.mensaje;
/** @type {?|undefined} */
Alert.prototype.tipo;
/** @type {?|undefined} */
Alert.prototype.class;
/** @enum {number} */
var AlertType = {
    None: 0,
    Success: 1,
    Error: 2,
    Warning: 3,
    Info: 4,
};
export { AlertType };
AlertType[AlertType.None] = 'None';
AlertType[AlertType.Success] = 'Success';
AlertType[AlertType.Error] = 'Error';
AlertType[AlertType.Warning] = 'Warning';
AlertType[AlertType.Info] = 'Info';
var CplxAlertService = /** @class */ (function () {
    function CplxAlertService(router) {
        var _this = this;
        this.router = router;
        this.routerchange = false;
        this.alerta = new Subject();
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                if (_this.routerchange) {
                    _this.routerchange = false;
                }
                else {
                    _this.clear();
                }
            }
        });
    }
    /**
     * @param {?} mensaje
     * @return {?}
     */
    CplxAlertService.prototype.add = /**
     * @param {?} mensaje
     * @return {?}
     */
    function (mensaje) {
        mensaje.class = "ns-show";
        this.alerta.next(mensaje);
    };
    ;
    /**
     * @return {?}
     */
    CplxAlertService.prototype.getAlertas = /**
     * @return {?}
     */
    function () {
        return this.alerta.asObservable();
    };
    /**
     * @return {?}
     */
    CplxAlertService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.alerta.next();
    };
    CplxAlertService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CplxAlertService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ CplxAlertService.ngInjectableDef = i0.defineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(i0.inject(i1.Router)); }, token: CplxAlertService, providedIn: "root" });
    return CplxAlertService;
}());
export { CplxAlertService };
if (false) {
    /** @type {?} */
    CplxAlertService.prototype.routerchange;
    /** @type {?} */
    CplxAlertService.prototype.alerta;
    /** @type {?} */
    CplxAlertService.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hbGVydC8iLCJzb3VyY2VzIjpbImxpYi9jcGx4LWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFVekQsT0FBSTtJQUNKLFVBQU87SUFDUCxRQUFLO0lBQ0wsVUFBTztJQUNQLE9BQUk7OztvQkFKSixJQUFJO29CQUNKLE9BQU87b0JBQ1AsS0FBSztvQkFDTCxPQUFPO29CQUNQLElBQUk7O0lBV0osMEJBQW9CLE1BQWM7UUFBbEMsaUJBVUM7UUFWbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTs0QkFGWCxLQUFLO3NCQWNYLElBQUksT0FBTyxFQUFTO1FBWHBDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDakMsSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO2dCQUNyQyxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3RCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2I7YUFDRDtTQUNELENBQUMsQ0FBQztLQUNIOzs7OztJQUlELDhCQUFHOzs7O0lBQUgsVUFBSSxPQUFjO1FBQ2pCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFCO0lBQUEsQ0FBQzs7OztJQUVGLHFDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNsQzs7OztJQUVELGdDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkI7O2dCQWpDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQW5CUSxNQUFNOzs7MkJBRmY7O1NBdUJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0IHtcblx0bWVuc2FqZT86IHN0cmluZztcblx0dGlwbz86IEFsZXJ0VHlwZTtcblx0Y2xhc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIEFsZXJ0VHlwZSB7XG5cdE5vbmUsXG5cdFN1Y2Nlc3MsXG5cdEVycm9yLFxuXHRXYXJuaW5nLFxuXHRJbmZvXG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQ3BseEFsZXJ0U2VydmljZSB7XG5cblx0cHJpdmF0ZSByb3V0ZXJjaGFuZ2UgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG5cdFx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcblx0XHRcdFx0aWYgKHRoaXMucm91dGVyY2hhbmdlKSB7XG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXJjaGFuZ2UgPSBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgYWxlcnRhID0gbmV3IFN1YmplY3Q8QWxlcnQ+KCk7XG5cblx0YWRkKG1lbnNhamU6IEFsZXJ0KSB7XG5cdFx0bWVuc2FqZS5jbGFzcyA9IFwibnMtc2hvd1wiXG5cdFx0dGhpcy5hbGVydGEubmV4dChtZW5zYWplKTtcblx0fTtcblxuXHRnZXRBbGVydGFzKCk6IE9ic2VydmFibGU8QWxlcnQ+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGVydGEuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmFsZXJ0YS5uZXh0KCk7XG5cdH1cbn1cbiJdfQ==