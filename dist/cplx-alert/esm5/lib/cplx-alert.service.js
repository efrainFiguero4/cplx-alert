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
        mensaje.id = Math.random().toString().split(".")[1];
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
    /** @nocollapse */ CplxAlertService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(i0.ɵɵinject(i1.Router)); }, token: CplxAlertService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3BseC1hbGVydC8iLCJzb3VyY2VzIjpbImxpYi9jcGx4LWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBRzFELDJCQU1DOzs7SUFMQSx3QkFBaUI7O0lBQ2pCLHFCQUFpQjs7SUFDakIsc0JBQWU7O0lBQ2YsbUJBQVc7O0lBQ1gscUJBQWM7OztBQUdmLElBQVksU0FBUztJQUNwQixJQUFJLEdBQUE7SUFDSixPQUFPLEdBQUE7SUFDUCxLQUFLLEdBQUE7SUFDTCxPQUFPLEdBQUE7SUFDUCxJQUFJLEdBQUE7RUFDSjs7Ozs7OztBQUVEO0lBUUMsMEJBQW9CLE1BQWM7UUFBbEMsaUJBVUM7UUFWbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUYxQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQWNyQixXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztRQVhyQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2pDLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDckMsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO29CQUN0QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDMUI7cUJBQU07b0JBQ04sS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNiO2FBQ0Q7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBSUQsOEJBQUc7Ozs7SUFBSCxVQUFJLE9BQWM7UUFDakIsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7UUFDekIsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFBQSxDQUFDOzs7O0lBRUYscUNBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxnQ0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQWxDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQXJCUSxNQUFNOzs7MkJBRmY7Q0F3REMsQUFuQ0QsSUFtQ0M7U0EvQlksZ0JBQWdCOzs7Ozs7SUFFNUIsd0NBQTZCOzs7OztJQWM3QixrQ0FBc0M7Ozs7O0lBWjFCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbGVydCB7XHJcblx0bWVuc2FqZT86IHN0cmluZztcclxuXHR0aXBvPzogQWxlcnRUeXBlO1xyXG5cdGNsYXNzPzogc3RyaW5nO1xyXG5cdGlkPzogc3RyaW5nXHJcblx0dGltZT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQWxlcnRUeXBlIHtcclxuXHROb25lLFxyXG5cdFN1Y2Nlc3MsXHJcblx0RXJyb3IsXHJcblx0V2FybmluZyxcclxuXHRJbmZvXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcGx4QWxlcnRTZXJ2aWNlIHtcclxuXHJcblx0cHJpdmF0ZSByb3V0ZXJjaGFuZ2UgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnJvdXRlcmNoYW5nZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXJjaGFuZ2UgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jbGVhcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFsZXJ0YSA9IG5ldyBTdWJqZWN0PEFsZXJ0PigpO1xyXG5cclxuXHRhZGQobWVuc2FqZTogQWxlcnQpIHtcclxuXHRcdG1lbnNhamUuY2xhc3MgPSBcIm5zLXNob3dcIlxyXG5cdFx0bWVuc2FqZS5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV07XHJcblx0XHR0aGlzLmFsZXJ0YS5uZXh0KG1lbnNhamUpO1xyXG5cdH07XHJcblxyXG5cdGdldEFsZXJ0YXMoKTogT2JzZXJ2YWJsZTxBbGVydD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWxlcnRhLmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXIoKSB7XHJcblx0XHR0aGlzLmFsZXJ0YS5uZXh0KCk7XHJcblx0fVxyXG59XHJcbiJdfQ==