/**
 * @fileoverview added by tsickle
 * Generated from: lib/cplx-alert.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @type {?|undefined} */
    Alert.prototype.id;
    /** @type {?|undefined} */
    Alert.prototype.time;
}
/** @enum {number} */
const AlertType = {
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
export class CplxAlertService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.routerchange = false;
        this.alerta = new Subject();
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationStart) {
                if (this.routerchange) {
                    this.routerchange = false;
                }
                else {
                    this.clear();
                }
            }
        }));
    }
    /**
     * @param {?} mensaje
     * @return {?}
     */
    add(mensaje) {
        mensaje.class = "ns-show";
        mensaje.id = Math.random().toString().split(".")[1];
        this.alerta.next(mensaje);
    }
    ;
    /**
     * @return {?}
     */
    getAlertas() {
        return this.alerta.asObservable();
    }
    /**
     * @return {?}
     */
    clear() {
        this.alerta.next();
    }
}
CplxAlertService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CplxAlertService.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ CplxAlertService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(i0.ɵɵinject(i1.Router)); }, token: CplxAlertService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hbGVydC8iLCJzb3VyY2VzIjpbImxpYi9jcGx4LWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBRzFELDJCQU1DOzs7SUFMQSx3QkFBaUI7O0lBQ2pCLHFCQUFpQjs7SUFDakIsc0JBQWU7O0lBQ2YsbUJBQVc7O0lBQ1gscUJBQWM7OztBQUdmLE1BQVksU0FBUztJQUNwQixJQUFJLEdBQUE7SUFDSixPQUFPLEdBQUE7SUFDUCxLQUFLLEdBQUE7SUFDTCxPQUFPLEdBQUE7SUFDUCxJQUFJLEdBQUE7RUFDSjs7Ozs7OztBQU1ELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFJNUIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGMUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFjckIsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7UUFYckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDckMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDMUI7cUJBQU07b0JBQ04sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNiO2FBQ0Q7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBSUQsR0FBRyxDQUFDLE9BQWM7UUFDakIsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7UUFDekIsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFBQSxDQUFDOzs7O0lBRUYsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBbENELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQXJCUSxNQUFNOzs7Ozs7OztJQXlCZCx3Q0FBNkI7Ozs7O0lBYzdCLGtDQUFzQzs7Ozs7SUFaMUIsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0IHtcclxuXHRtZW5zYWplPzogc3RyaW5nO1xyXG5cdHRpcG8/OiBBbGVydFR5cGU7XHJcblx0Y2xhc3M/OiBzdHJpbmc7XHJcblx0aWQ/OiBzdHJpbmdcclxuXHR0aW1lPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBbGVydFR5cGUge1xyXG5cdE5vbmUsXHJcblx0U3VjY2VzcyxcclxuXHRFcnJvcixcclxuXHRXYXJuaW5nLFxyXG5cdEluZm9cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENwbHhBbGVydFNlcnZpY2Uge1xyXG5cclxuXHRwcml2YXRlIHJvdXRlcmNoYW5nZSA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMucm91dGVyY2hhbmdlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnJvdXRlcmNoYW5nZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmNsZWFyKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYWxlcnRhID0gbmV3IFN1YmplY3Q8QWxlcnQ+KCk7XHJcblxyXG5cdGFkZChtZW5zYWplOiBBbGVydCkge1xyXG5cdFx0bWVuc2FqZS5jbGFzcyA9IFwibnMtc2hvd1wiXHJcblx0XHRtZW5zYWplLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXTtcclxuXHRcdHRoaXMuYWxlcnRhLm5leHQobWVuc2FqZSk7XHJcblx0fTtcclxuXHJcblx0Z2V0QWxlcnRhcygpOiBPYnNlcnZhYmxlPEFsZXJ0PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5hbGVydGEuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdHRoaXMuYWxlcnRhLm5leHQoKTtcclxuXHR9XHJcbn1cclxuIl19