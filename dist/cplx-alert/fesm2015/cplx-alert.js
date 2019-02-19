import { Subject } from 'rxjs';
import { Injectable, Component, Input, NgModule, defineInjectable, inject } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { CommonModule } from '@angular/common';
import { Router, NavigationStart, RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AlertType = {
    None: 0,
    Success: 1,
    Error: 2,
    Warning: 3,
    Info: 4,
};
AlertType[AlertType.None] = 'None';
AlertType[AlertType.Success] = 'Success';
AlertType[AlertType.Error] = 'Error';
AlertType[AlertType.Warning] = 'Warning';
AlertType[AlertType.Info] = 'Info';
class CplxAlertService {
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
/** @nocollapse */ CplxAlertService.ngInjectableDef = defineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(inject(Router)); }, token: CplxAlertService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CplxAlertComponent {
    /**
     * @param {?} _sms
     */
    constructor(_sms) {
        this._sms = _sms;
        this.alertas = new Array();
        this.subscription = this._sms.getAlertas().subscribe((/**
         * @param {?} alert
         * @return {?}
         */
        (alert) => {
            if (alert && !isNullOrUndefined(alert.mensaje)) {
                if (!this.validate_mensaje(alert)) {
                    this.alertas.push(alert);
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.removerMensaje(alert, this.alertas.indexOf(alert));
                    }), isNullOrUndefined(this.timeout) ? 5000 : this.timeout);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (!isNullOrUndefined(this.subscription))
            this.subscription.unsubscribe();
    }
    /**
     * @param {?} mensaje
     * @return {?}
     */
    validate_mensaje(mensaje) {
        if (this.alertas.length)
            for (const alerta of this.alertas)
                if (alerta.mensaje == mensaje.mensaje)
                    return true;
        return false;
    }
    /**
     * @param {?} alert
     * @param {?} index
     * @return {?}
     */
    removerMensaje(alert, index) {
        alert.class = 'ns-hide';
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.alertas.splice(index, 1);
        }), 230);
    }
    //[ngClass]="{'alert-success text-success': m.tipo == 1 ,'alert-danger text-danger':m.tipo == 2 ,'alert-warning text-warning':m.tipo == 3 ,'alert-primary text-primary':m.tipo == 4}"
    /**
     * @param {?} alert
     * @return {?}
     */
    cssClass(alert) {
        if (!alert) {
            return;
        }
        switch (alert.tipo) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
    //[ngClass]="{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}"
    /**
     * @param {?} alert
     * @return {?}
     */
    cssClassIcon(alert) {
        if (!alert) {
            return;
        }
        switch (alert.tipo) {
            case AlertType.Success:
                return 'fa-thumbs-o-up';
            case AlertType.Error:
                return 'fa-thumbs-o-down';
            case AlertType.Info:
                return 'fa-exclamation-circle';
            case AlertType.Warning:
                return 'fa-bullseye';
        }
    }
}
CplxAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'cplx-alert',
                template: "<div class=\"alerta-mensaje\">\r\n\t<div *ngFor=\"let m of alertas; let i = index\"\r\n\t\tclass=\"{{cssClass(m)}} ns-growl ns-box ns-effect-scale {{m.class}} px-2\">\r\n\t\t<div class=\"sms-box-inner\">\r\n\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t<div class=\"pr-2 center-center\">\r\n\t\t\t\t\t<i class=\"fa fa-2x\" [ngClass]=\"{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,\r\n\t\t\t\t\t\t'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<label>{{m.mensaje}}.</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i class=\"fa fa-times-circle fa-lg close\" aria-hidden=\"true\" style=\"cursor:pointer\"\r\n\t\t\t(click)=\"removerMensaje(m,i)\"></i>\r\n\t</div>\r\n</div>\r\n",
                styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;min-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.center-center{display:flex;flex-direction:column;justify-content:center;align-items:center}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
            }] }
];
/** @nocollapse */
CplxAlertComponent.ctorParameters = () => [
    { type: CplxAlertService }
];
CplxAlertComponent.propDecorators = {
    timeout: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CplxAlertModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CplxAlertModule,
            providers: [CplxAlertService, RouterModule]
        };
    }
}
CplxAlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                declarations: [CplxAlertComponent],
                exports: [CplxAlertComponent],
                providers: [CplxAlertService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AlertType, CplxAlertService, CplxAlertModule, CplxAlertComponent as ɵa };

//# sourceMappingURL=cplx-alert.js.map