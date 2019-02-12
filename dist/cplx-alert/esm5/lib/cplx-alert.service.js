/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /** @type {?|undefined} */
    Alert.prototype.mensaje;
    /** @type {?|undefined} */
    Alert.prototype.tipo;
    /** @type {?|undefined} */
    Alert.prototype.class;
}
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
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationStart) {
                if (_this.routerchange) {
                    _this.routerchange = false;
                }
                else {
                    _this.clear();
                }
            }
        }));
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
    /**
     * @type {?}
     * @private
     */
    CplxAlertService.prototype.routerchange;
    /**
     * @type {?}
     * @private
     */
    CplxAlertService.prototype.alerta;
    /**
     * @type {?}
     * @private
     */
    CplxAlertService.prototype.router;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hbGVydC8iLCJzb3VyY2VzIjpbImxpYi9jcGx4LWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7QUFHMUQsMkJBSUM7OztJQUhBLHdCQUFpQjs7SUFDakIscUJBQWlCOztJQUNqQixzQkFBZTs7OztJQUlmLE9BQUk7SUFDSixVQUFPO0lBQ1AsUUFBSztJQUNMLFVBQU87SUFDUCxPQUFJOzs7Ozs7OztBQUdMO0lBUUMsMEJBQW9CLE1BQWM7UUFBbEMsaUJBVUM7UUFWbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUYxQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQWNyQixXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztRQVhyQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2pDLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDckMsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO29CQUN0QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDMUI7cUJBQU07b0JBQ04sS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNiO2FBQ0Q7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBSUQsOEJBQUc7Ozs7SUFBSCxVQUFJLE9BQWM7UUFDakIsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRixxQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGdDQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBakNELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBbkJRLE1BQU07OzsyQkFGZjtDQXFEQyxBQWxDRCxJQWtDQztTQTlCWSxnQkFBZ0I7Ozs7OztJQUU1Qix3Q0FBNkI7Ozs7O0lBYzdCLGtDQUFzQzs7Ozs7SUFaMUIsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0IHtcclxuXHRtZW5zYWplPzogc3RyaW5nO1xyXG5cdHRpcG8/OiBBbGVydFR5cGU7XHJcblx0Y2xhc3M/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFsZXJ0VHlwZSB7XHJcblx0Tm9uZSxcclxuXHRTdWNjZXNzLFxyXG5cdEVycm9yLFxyXG5cdFdhcm5pbmcsXHJcblx0SW5mb1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3BseEFsZXJ0U2VydmljZSB7XHJcblxyXG5cdHByaXZhdGUgcm91dGVyY2hhbmdlID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5yb3V0ZXJjaGFuZ2UpIHtcclxuXHRcdFx0XHRcdHRoaXMucm91dGVyY2hhbmdlID0gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuY2xlYXIoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhbGVydGEgPSBuZXcgU3ViamVjdDxBbGVydD4oKTtcclxuXHJcblx0YWRkKG1lbnNhamU6IEFsZXJ0KSB7XHJcblx0XHRtZW5zYWplLmNsYXNzID0gXCJucy1zaG93XCJcclxuXHRcdHRoaXMuYWxlcnRhLm5leHQobWVuc2FqZSk7XHJcblx0fTtcclxuXHJcblx0Z2V0QWxlcnRhcygpOiBPYnNlcnZhYmxlPEFsZXJ0PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5hbGVydGEuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdHRoaXMuYWxlcnRhLm5leHQoKTtcclxuXHR9XHJcbn1cclxuIl19