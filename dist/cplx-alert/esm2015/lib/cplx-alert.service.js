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
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.routerchange) {
                    this.routerchange = false;
                }
                else {
                    this.clear();
                }
            }
        });
    }
    /**
     * @param {?} mensaje
     * @return {?}
     */
    add(mensaje) {
        mensaje.class = "ns-show";
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
/** @nocollapse */ CplxAlertService.ngInjectableDef = i0.defineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(i0.inject(i1.Router)); }, token: CplxAlertService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CplxAlertService.prototype.routerchange;
    /** @type {?} */
    CplxAlertService.prototype.alerta;
    /** @type {?} */
    CplxAlertService.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hbGVydC8iLCJzb3VyY2VzIjpbImxpYi9jcGx4LWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFVekQsT0FBSTtJQUNKLFVBQU87SUFDUCxRQUFLO0lBQ0wsVUFBTztJQUNQLE9BQUk7OztvQkFKSixJQUFJO29CQUNKLE9BQU87b0JBQ1AsS0FBSztvQkFDTCxPQUFPO29CQUNQLElBQUk7QUFPTCxNQUFNOzs7O0lBSUwsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7NEJBRlgsS0FBSztzQkFjWCxJQUFJLE9BQU8sRUFBUztRQVhwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO2dCQUNyQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2I7YUFDRDtTQUNELENBQUMsQ0FBQztLQUNIOzs7OztJQUlELEdBQUcsQ0FBQyxPQUFjO1FBQ2pCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFCO0lBQUEsQ0FBQzs7OztJQUVGLFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDbEM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNuQjs7O1lBakNELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQW5CUSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnQge1xuXHRtZW5zYWplPzogc3RyaW5nO1xuXHR0aXBvPzogQWxlcnRUeXBlO1xuXHRjbGFzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gQWxlcnRUeXBlIHtcblx0Tm9uZSxcblx0U3VjY2Vzcyxcblx0RXJyb3IsXG5cdFdhcm5pbmcsXG5cdEluZm9cbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDcGx4QWxlcnRTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJvdXRlcmNoYW5nZSA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuXHRcdFx0XHRpZiAodGhpcy5yb3V0ZXJjaGFuZ2UpIHtcblx0XHRcdFx0XHR0aGlzLnJvdXRlcmNoYW5nZSA9IGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY2xlYXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhbGVydGEgPSBuZXcgU3ViamVjdDxBbGVydD4oKTtcblxuXHRhZGQobWVuc2FqZTogQWxlcnQpIHtcblx0XHRtZW5zYWplLmNsYXNzID0gXCJucy1zaG93XCJcblx0XHR0aGlzLmFsZXJ0YS5uZXh0KG1lbnNhamUpO1xuXHR9O1xuXG5cdGdldEFsZXJ0YXMoKTogT2JzZXJ2YWJsZTxBbGVydD4ge1xuXHRcdHJldHVybiB0aGlzLmFsZXJ0YS5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuYWxlcnRhLm5leHQoKTtcblx0fVxufVxuIl19