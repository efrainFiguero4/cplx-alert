import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Input, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { __values } from 'tslib';
import { isNullOrUndefined } from 'util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/cplx-alert.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common';

var _c0 = function (a0, a1, a2, a3) { return { "fa-thumbs-o-up": a0, "fa-thumbs-o-down": a1, "fa-exclamation-circle": a2, "fa-bullseye": a3 }; };
function CplxAlertComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelement(4, "i", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div");
    ɵngcc0.ɵɵelementStart(6, "label");
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "i", 6);
    ɵngcc0.ɵɵlistener("click", function CplxAlertComponent_div_1_Template_i_click_8_listener() { ɵngcc0.ɵɵrestoreView(_r4); var m_r1 = ctx.$implicit; var i_r2 = ctx.index; var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.removerMensaje(m_r1, i_r2); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var m_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.cssClass(m_r1), " ns-growl ns-box ns-effect-scale ", m_r1.class, " px-2");
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(6, _c0, m_r1.tipo == 1, m_r1.tipo == 2, m_r1.tipo == 3, m_r1.tipo == 4));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(m_r1.mensaje);
} }
function Alert() { }
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
    /** @nocollapse */
    CplxAlertService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ CplxAlertService.ɵprov = ɵɵdefineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(ɵɵinject(Router)); }, token: CplxAlertService, providedIn: "root" });
CplxAlertService.ɵfac = function CplxAlertService_Factory(t) { return new (t || CplxAlertService)(ɵngcc0.ɵɵinject(ɵngcc1.Router)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CplxAlertService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.Router }]; }, null); })();
    return CplxAlertService;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/cplx-alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    /** @type {?} */
                    var timeout = isNullOrUndefined(_this.timeout) ? 5000 : _this.timeout;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.removerMensaje(alert, alert.id);
                    }), timeout);
                }
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CplxAlertComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.alertas.length > 0) {
            var _loop_1 = function (index) {
                /** @type {?} */
                var timeout = (isNullOrUndefined(this_1.timeout) ? 5000 : this_1.timeout) + index + 1;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.removerMensaje(_this.alertas[index], _this.alertas[index].id);
                }), timeout);
            };
            var this_1 = this;
            for (var index = 1; index < this.alertas.length; index++) {
                _loop_1(index);
            }
        }
    };
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
     * @param {?} id
     * @return {?}
     */
    CplxAlertComponent.prototype.removerMensaje = /**
     * @param {?} alert
     * @param {?} id
     * @return {?}
     */
    function (alert, id) {
        var _this = this;
        alert.class = 'ns-hide';
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var idx = _this.alertas.findIndex((/**
             * @param {?} a
             * @return {?}
             */
            function (a) { return a.id == id; }));
            _this.alertas.splice(idx, 1);
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
    /** @nocollapse */
    CplxAlertComponent.ctorParameters = function () { return [
        { type: CplxAlertService }
    ]; };
    CplxAlertComponent.propDecorators = {
        alertas: [{ type: Input }],
        timeout: [{ type: Input }]
    };
CplxAlertComponent.ɵfac = function CplxAlertComponent_Factory(t) { return new (t || CplxAlertComponent)(ɵngcc0.ɵɵdirectiveInject(CplxAlertService)); };
CplxAlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CplxAlertComponent, selectors: [["cplx-alert"]], inputs: { alertas: "alertas", timeout: "timeout" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "alerta-mensaje"], [3, "class", 4, "ngFor", "ngForOf"], [1, "sms-box-inner"], [1, "d-flex"], [1, "pr-2", "center-center"], [1, "fa", "fa-2x", 3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-times-circle", "fa-lg", "close", 2, "cursor", "pointer", 3, "click"]], template: function CplxAlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, CplxAlertComponent_div_1_Template, 9, 11, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.alertas);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc2.NgClass], styles: [".alerta-mensaje[_ngcontent-%COMP%]{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show[_ngcontent-%COMP%]{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide[_ngcontent-%COMP%]{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale[_ngcontent-%COMP%]{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl[_ngcontent-%COMP%]{max-width:300px;min-width:300px;border-radius:5px}.ns-box[_ngcontent-%COMP%]{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.center-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.close[_ngcontent-%COMP%]{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;transform:translate3d(0,0,0) scale3d(1,1,1)}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CplxAlertComponent, [{
        type: Component,
        args: [{
                selector: 'cplx-alert',
                template: "<div class=\"alerta-mensaje\">\r\n\t<div *ngFor=\"let m of alertas; let i = index\"\r\n\t\tclass=\"{{cssClass(m)}} ns-growl ns-box ns-effect-scale {{m.class}} px-2\">\r\n\t\t<div class=\"sms-box-inner\">\r\n\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t<div class=\"pr-2 center-center\">\r\n\t\t\t\t\t<i class=\"fa fa-2x\" [ngClass]=\"{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,\r\n\t\t\t\t\t\t'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<label>{{m.mensaje}}</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i class=\"fa fa-times-circle fa-lg close\" aria-hidden=\"true\" style=\"cursor:pointer\"\r\n\t\t\t(click)=\"removerMensaje(m,i)\"></i>\r\n\t</div>\r\n</div>\r\n",
                styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;min-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.center-center{display:flex;flex-direction:column;justify-content:center;align-items:center}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
            }]
    }], function () { return [{ type: CplxAlertService }]; }, { alertas: [{
            type: Input
        }], timeout: [{
            type: Input
        }] }); })();
    return CplxAlertComponent;
}());
if (false) {
    /** @type {?} */
    CplxAlertComponent.prototype.subscription;
    /** @type {?} */
    CplxAlertComponent.prototype.alertas;
    /** @type {?} */
    CplxAlertComponent.prototype.timeout;
    /**
     * @type {?}
     * @private
     */
    CplxAlertComponent.prototype._sms;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/cplx-alert.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
CplxAlertModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CplxAlertModule });
CplxAlertModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CplxAlertModule_Factory(t) { return new (t || CplxAlertModule)(); }, providers: [CplxAlertService], imports: [[CommonModule, RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CplxAlertModule, { declarations: function () { return [CplxAlertComponent]; }, imports: function () { return [CommonModule, RouterModule]; }, exports: function () { return [CplxAlertComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CplxAlertModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule],
                declarations: [CplxAlertComponent],
                exports: [CplxAlertComponent],
                providers: [CplxAlertService]
            }]
    }], function () { return []; }, null); })();
    return CplxAlertModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: cplx-alert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AlertType, CplxAlertModule, CplxAlertService, CplxAlertComponent as ɵa };

//# sourceMappingURL=cplx-alert.js.map