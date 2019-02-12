import { Subject } from 'rxjs';
import { __values } from 'tslib';
import { Injectable, NgModule, Component, defineInjectable, inject } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { CommonModule } from '@angular/common';
import { Router, NavigationStart, RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var AlertType = {
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
    /** @nocollapse */ CplxAlertService.ngInjectableDef = defineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(inject(Router)); }, token: CplxAlertService, providedIn: "root" });
    return CplxAlertService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CplxAlertComponent = /** @class */ (function () {
    function CplxAlertComponent(_sms) {
        var _this = this;
        this._sms = _sms;
        this.alertas = new Array();
        this.subscription = this._sms.getAlertas().subscribe((/**
         * @param {?} alert
         * @return {?}
         */
        function (alert) {
            if (alert && !isNullOrUndefined(alert.mensaje)) {
                if (!_this.validate_mensaje(alert)) {
                    _this.alertas.push(alert);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        //this.removerMensaje(alert, this.alertas.indexOf(alert));
                    }), 5000);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    CplxAlertComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (!isNullOrUndefined(this.subscription))
            this.subscription.unsubscribe();
    };
    /**
     * @param {?} mensaje
     * @return {?}
     */
    CplxAlertComponent.prototype.validate_mensaje = /**
     * @param {?} mensaje
     * @return {?}
     */
    function (mensaje) {
        var e_1, _a;
        if (this.alertas.length)
            try {
                for (var _b = __values(this.alertas), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var alerta = _c.value;
                    if (alerta.mensaje == mensaje.mensaje)
                        return true;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        return false;
    };
    /**
     * @param {?} alert
     * @param {?} index
     * @return {?}
     */
    CplxAlertComponent.prototype.removerMensaje = /**
     * @param {?} alert
     * @param {?} index
     * @return {?}
     */
    function (alert, index) {
        var _this = this;
        alert.class = 'ns-hide';
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.alertas.splice(index, 1);
        }), 230);
    };
    //[ngClass]="{'alert-success text-success': m.tipo == 1 ,'alert-danger text-danger':m.tipo == 2 ,'alert-warning text-warning':m.tipo == 3 ,'alert-primary text-primary':m.tipo == 4}"
    //[ngClass]="{'alert-success text-success': m.tipo == 1 ,'alert-danger text-danger':m.tipo == 2 ,'alert-warning text-warning':m.tipo == 3 ,'alert-primary text-primary':m.tipo == 4}"
    /**
     * @param {?} alert
     * @return {?}
     */
    CplxAlertComponent.prototype.cssClass = 
    //[ngClass]="{'alert-success text-success': m.tipo == 1 ,'alert-danger text-danger':m.tipo == 2 ,'alert-warning text-warning':m.tipo == 3 ,'alert-primary text-primary':m.tipo == 4}"
    /**
     * @param {?} alert
     * @return {?}
     */
    function (alert) {
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
    };
    //[ngClass]="{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}"
    //[ngClass]="{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}"
    /**
     * @param {?} alert
     * @return {?}
     */
    CplxAlertComponent.prototype.cssClassIcon = 
    //[ngClass]="{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}"
    /**
     * @param {?} alert
     * @return {?}
     */
    function (alert) {
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
    };
    CplxAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cplx-alert',
                    template: "<div class=\"alerta-mensaje\">\r\n\t<div *ngFor=\"let m of alertas; let i = index\" class=\"{{cssClass(m)}} ns-growl ns-box ns-effect-scale {{m.class}}\">\r\n\t\t<div class=\"sms-box-inner\">\r\n\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t<div class=\"pr-2 center-center\">\r\n\t\t\t\t\t<i class=\"fa fa-2x\" [ngClass]=\"{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,\r\n\t\t\t\t\t\t'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<label>{{m.mensaje}}.</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i class=\"fa fa-times-circle fa-lg close\" aria-hidden=\"true\" style=\"cursor:pointer\"\r\n\t\t\t(click)=\"removerMensaje(m,i)\"></i>\r\n\t</div>\r\n</div>\r\n",
                    styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;min-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.center-center{display:flex;flex-direction:column;justify-content:center;align-items:center}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
                }] }
    ];
    /** @nocollapse */
    CplxAlertComponent.ctorParameters = function () { return [
        { type: CplxAlertService }
    ]; };
    return CplxAlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CplxAlertModule = /** @class */ (function () {
    function CplxAlertModule() {
    }
    /**
     * @return {?}
     */
    CplxAlertModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CplxAlertModule,
            providers: [CplxAlertService, RouterModule]
        };
    };
    CplxAlertModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule],
                    declarations: [CplxAlertComponent],
                    exports: [CplxAlertComponent],
                    providers: [CplxAlertService]
                },] }
    ];
    return CplxAlertModule;
}());

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