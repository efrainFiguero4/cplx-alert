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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hbGVydC8iLCJzb3VyY2VzIjpbImxpYi9jcGx4LWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7QUFHMUQsMkJBSUM7OztJQUhBLHdCQUFpQjs7SUFDakIscUJBQWlCOztJQUNqQixzQkFBZTs7OztJQUlmLE9BQUk7SUFDSixVQUFPO0lBQ1AsUUFBSztJQUNMLFVBQU87SUFDUCxPQUFJOzs7Ozs7OztBQU9MLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFJNUIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGMUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFjckIsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7UUFYckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDckMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDMUI7cUJBQU07b0JBQ04sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNiO2FBQ0Q7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBSUQsR0FBRyxDQUFDLE9BQWM7UUFDakIsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRixVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7WUFqQ0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBbkJRLE1BQU07Ozs7Ozs7O0lBdUJkLHdDQUE2Qjs7Ozs7SUFjN0Isa0NBQXNDOzs7OztJQVoxQixrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnQge1xyXG5cdG1lbnNhamU/OiBzdHJpbmc7XHJcblx0dGlwbz86IEFsZXJ0VHlwZTtcclxuXHRjbGFzcz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQWxlcnRUeXBlIHtcclxuXHROb25lLFxyXG5cdFN1Y2Nlc3MsXHJcblx0RXJyb3IsXHJcblx0V2FybmluZyxcclxuXHRJbmZvXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcGx4QWxlcnRTZXJ2aWNlIHtcclxuXHJcblx0cHJpdmF0ZSByb3V0ZXJjaGFuZ2UgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnJvdXRlcmNoYW5nZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXJjaGFuZ2UgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jbGVhcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFsZXJ0YSA9IG5ldyBTdWJqZWN0PEFsZXJ0PigpO1xyXG5cclxuXHRhZGQobWVuc2FqZTogQWxlcnQpIHtcclxuXHRcdG1lbnNhamUuY2xhc3MgPSBcIm5zLXNob3dcIlxyXG5cdFx0dGhpcy5hbGVydGEubmV4dChtZW5zYWplKTtcclxuXHR9O1xyXG5cclxuXHRnZXRBbGVydGFzKCk6IE9ic2VydmFibGU8QWxlcnQ+IHtcclxuXHRcdHJldHVybiB0aGlzLmFsZXJ0YS5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyKCkge1xyXG5cdFx0dGhpcy5hbGVydGEubmV4dCgpO1xyXG5cdH1cclxufVxyXG4iXX0=