(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/router'), require('util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('cplx-alert', ['exports', '@angular/core', 'rxjs', '@angular/router', 'util', '@angular/common'], factory) :
    (factory((global['cplx-alert'] = {}),global.ng.core,global.rxjs,global.ng.router,global.util,global.ng.common));
}(this, (function (exports,i0,rxjs,i1,util,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            this.alerta = new rxjs.Subject();
            this.router.events.subscribe(function (event) {
                if (event instanceof i1.NavigationStart) {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CplxAlertService.ctorParameters = function () {
            return [
                { type: i1.Router }
            ];
        };
        /** @nocollapse */ CplxAlertService.ngInjectableDef = i0.defineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(i0.inject(i1.Router)); }, token: CplxAlertService, providedIn: "root" });
        return CplxAlertService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CplxAlertComponent = /** @class */ (function () {
        function CplxAlertComponent(_sms) {
            var _this = this;
            this._sms = _sms;
            this.alertas = new Array();
            this.subscription = this._sms.getAlertas().subscribe(function (alert) {
                if (alert && !util.isNullOrUndefined(alert.mensaje)) {
                    if (!_this.validate_mensaje(alert)) {
                        _this.alertas.push(alert);
                        setTimeout(function () {
                            _this.removerMensaje(alert, _this.alertas.indexOf(alert));
                        }, 5000);
                    }
                }
            });
        }
        /**
         * @return {?}
         */
        CplxAlertComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (!util.isNullOrUndefined(this.subscription))
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
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
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
                setTimeout(function () {
                    _this.alertas.splice(index, 1);
                }, 230);
            };
        //[ngClass]="{'alert-success text-success': m.tipo == 1 ,'alert-danger text-danger':m.tipo == 2 ,'alert-warning text-warning':m.tipo == 3 ,'alert-primary text-primary':m.tipo == 4}"
        /**
         * @param {?} alert
         * @return {?}
         */
        CplxAlertComponent.prototype.cssClass = /**
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
        /**
         * @param {?} alert
         * @return {?}
         */
        CplxAlertComponent.prototype.cssClassIcon = /**
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
            { type: i0.Component, args: [{
                        selector: 'cplx-alert',
                        template: "\n\t\t<div class=\"alerta-mensaje\">\n\t\t\t<div *ngFor=\"let m of alertas; let i = index\" class=\"{{cssClass(m)}} ns-growl ns-box ns-effect-scale {{m.class}}\">\n\t\t\t\t<div class=\"sms-box-inner\">\n\t\t\t\t\t<p class=\"p-0 m-0\">{{m.mensaje}}.</p>\n\t\t\t\t</div>\n\t\t\t\t<i class=\"fa fa-times-circle fa-lg close\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"removerMensaje(m,i)\"></i>\n\t\t\t</div>\n\t\t</div>\n  ",
                        styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;min-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.fa-times-circle:before{font-family:monospace;content:\"x\"}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
                    }] }
        ];
        /** @nocollapse */
        CplxAlertComponent.ctorParameters = function () {
            return [
                { type: CplxAlertService }
            ];
        };
        return CplxAlertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    providers: [CplxAlertService, i1.RouterModule]
                };
            };
        CplxAlertModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, i1.RouterModule],
                        declarations: [CplxAlertComponent],
                        exports: [CplxAlertComponent],
                        providers: [CplxAlertService]
                    },] }
        ];
        return CplxAlertModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.AlertType = AlertType;
    exports.CplxAlertService = CplxAlertService;
    exports.CplxAlertModule = CplxAlertModule;
    exports.ɵa = CplxAlertComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NwbHgtYWxlcnQvbGliL2NwbHgtYWxlcnQuc2VydmljZS50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL2NwbHgtYWxlcnQvbGliL2NwbHgtYWxlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9jcGx4LWFsZXJ0L2xpYi9jcGx4LWFsZXJ0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydCB7XG5cdG1lbnNhamU/OiBzdHJpbmc7XG5cdHRpcG8/OiBBbGVydFR5cGU7XG5cdGNsYXNzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBBbGVydFR5cGUge1xuXHROb25lLFxuXHRTdWNjZXNzLFxuXHRFcnJvcixcblx0V2FybmluZyxcblx0SW5mb1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIENwbHhBbGVydFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgcm91dGVyY2hhbmdlID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuXHRcdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XG5cdFx0XHRcdGlmICh0aGlzLnJvdXRlcmNoYW5nZSkge1xuXHRcdFx0XHRcdHRoaXMucm91dGVyY2hhbmdlID0gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jbGVhcigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGFsZXJ0YSA9IG5ldyBTdWJqZWN0PEFsZXJ0PigpO1xuXG5cdGFkZChtZW5zYWplOiBBbGVydCkge1xuXHRcdG1lbnNhamUuY2xhc3MgPSBcIm5zLXNob3dcIlxuXHRcdHRoaXMuYWxlcnRhLm5leHQobWVuc2FqZSk7XG5cdH07XG5cblx0Z2V0QWxlcnRhcygpOiBPYnNlcnZhYmxlPEFsZXJ0PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxlcnRhLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5hbGVydGEubmV4dCgpO1xuXHR9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0LCBDcGx4QWxlcnRTZXJ2aWNlLCBBbGVydFR5cGUgfSBmcm9tICcuL2NwbHgtYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NwbHgtYWxlcnQnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJhbGVydGEtbWVuc2FqZVwiPlxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgbSBvZiBhbGVydGFzOyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJ7e2Nzc0NsYXNzKG0pfX0gbnMtZ3Jvd2wgbnMtYm94IG5zLWVmZmVjdC1zY2FsZSB7e20uY2xhc3N9fVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic21zLWJveC1pbm5lclwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicC0wIG0tMFwiPnt7bS5tZW5zYWplfX0uPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGUgZmEtbGcgY2xvc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyXCIgKGNsaWNrKT1cInJlbW92ZXJNZW5zYWplKG0saSlcIj48L2k+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgYCxcblx0c3R5bGVVcmxzOiBbJy4vY3BseC1hbGVydC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDcGx4QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRhbGVydGFzID0gbmV3IEFycmF5PEFsZXJ0PigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3NtczogQ3BseEFsZXJ0U2VydmljZSkge1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fc21zLmdldEFsZXJ0YXMoKS5zdWJzY3JpYmUoKGFsZXJ0OiBBbGVydCkgPT4ge1xuXHRcdFx0aWYgKGFsZXJ0ICYmICFpc051bGxPclVuZGVmaW5lZChhbGVydC5tZW5zYWplKSkge1xuXHRcdFx0XHRpZiAoIXRoaXMudmFsaWRhdGVfbWVuc2FqZShhbGVydCkpIHtcblx0XHRcdFx0XHR0aGlzLmFsZXJ0YXMucHVzaChhbGVydCk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbW92ZXJNZW5zYWplKGFsZXJ0LCB0aGlzLmFsZXJ0YXMuaW5kZXhPZihhbGVydCkpO1xuXHRcdFx0XHRcdH0sIDUwMDApXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKCFpc051bGxPclVuZGVmaW5lZCh0aGlzLnN1YnNjcmlwdGlvbikpXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0dmFsaWRhdGVfbWVuc2FqZShtZW5zYWplOiBBbGVydCkge1xuXHRcdGlmICh0aGlzLmFsZXJ0YXMubGVuZ3RoKVxuXHRcdFx0Zm9yIChjb25zdCBhbGVydGEgb2YgdGhpcy5hbGVydGFzKVxuXHRcdFx0XHRpZiAoYWxlcnRhLm1lbnNhamUgPT0gbWVuc2FqZS5tZW5zYWplKSByZXR1cm4gdHJ1ZTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXG5cdHJlbW92ZXJNZW5zYWplKGFsZXJ0OiBBbGVydCwgaW5kZXgpIHtcblx0XHRhbGVydC5jbGFzcyA9ICducy1oaWRlJztcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuYWxlcnRhcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH0sIDIzMCk7XG5cdH1cblxuXHQvL1tuZ0NsYXNzXT1cInsnYWxlcnQtc3VjY2VzcyB0ZXh0LXN1Y2Nlc3MnOiBtLnRpcG8gPT0gMSAsJ2FsZXJ0LWRhbmdlciB0ZXh0LWRhbmdlcic6bS50aXBvID09IDIgLCdhbGVydC13YXJuaW5nIHRleHQtd2FybmluZyc6bS50aXBvID09IDMgLCdhbGVydC1wcmltYXJ5IHRleHQtcHJpbWFyeSc6bS50aXBvID09IDR9XCJcblx0Y3NzQ2xhc3MoYWxlcnQ6IEFsZXJ0KSB7XG5cdFx0aWYgKCFhbGVydCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoYWxlcnQudGlwbykge1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuU3VjY2Vzczpcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC1zdWNjZXNzJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkVycm9yOlxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LWRhbmdlcic7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5JbmZvOlxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LWluZm8nO1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuV2FybmluZzpcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC13YXJuaW5nJztcblx0XHR9XG5cdH1cblxuXHQvL1tuZ0NsYXNzXT1cInsnZmEtdGh1bWJzLW8tdXAnOiBtLnRpcG8gPT0gMSAsJ2ZhLXRodW1icy1vLWRvd24nOm0udGlwbyA9PSAyICwnZmEtZXhjbGFtYXRpb24tY2lyY2xlJzptLnRpcG8gPT0gMyAsJ2ZhLWJ1bGxzZXllJzptLnRpcG8gPT0gNH1cIlxuXHRjc3NDbGFzc0ljb24oYWxlcnQ6IEFsZXJ0KSB7XG5cdFx0aWYgKCFhbGVydCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzd2l0Y2ggKGFsZXJ0LnRpcG8pIHtcblx0XHRcdGNhc2UgQWxlcnRUeXBlLlN1Y2Nlc3M6XG5cdFx0XHRcdHJldHVybiAnZmEtdGh1bWJzLW8tdXAnO1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuRXJyb3I6XG5cdFx0XHRcdHJldHVybiAnZmEtdGh1bWJzLW8tZG93bic7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5JbmZvOlxuXHRcdFx0XHRyZXR1cm4gJ2ZhLWV4Y2xhbWF0aW9uLWNpcmNsZSc7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxuXHRcdFx0XHRyZXR1cm4gJ2ZhLWJ1bGxzZXllJztcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDcGx4QWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2NwbHgtYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7IENwbHhBbGVydFNlcnZpY2UgfSBmcm9tICcuL2NwbHgtYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXG5cdGRlY2xhcmF0aW9uczogW0NwbHhBbGVydENvbXBvbmVudF0sXG5cdGV4cG9ydHM6IFtDcGx4QWxlcnRDb21wb25lbnRdLFxuXHRwcm92aWRlcnM6IFtDcGx4QWxlcnRTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIENwbHhBbGVydE1vZHVsZSB7XG5cdHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogQ3BseEFsZXJ0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbQ3BseEFsZXJ0U2VydmljZSwgUm91dGVyTW9kdWxlXVxuXHRcdH07XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJqZWN0IiwiTmF2aWdhdGlvblN0YXJ0IiwiSW5qZWN0YWJsZSIsIlJvdXRlciIsImlzTnVsbE9yVW5kZWZpbmVkIiwidHNsaWJfMS5fX3ZhbHVlcyIsIkNvbXBvbmVudCIsIlJvdXRlck1vZHVsZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O1FBWUMsT0FBSTtRQUNKLFVBQU87UUFDUCxRQUFLO1FBQ0wsVUFBTztRQUNQLE9BQUk7O3dCQUpKLElBQUk7d0JBQ0osT0FBTzt3QkFDUCxLQUFLO3dCQUNMLE9BQU87d0JBQ1AsSUFBSTs7UUFXSiwwQkFBb0IsTUFBYztZQUFsQyxpQkFVQztZQVZtQixXQUFNLEdBQU4sTUFBTSxDQUFRO2dDQUZYLEtBQUs7MEJBY1gsSUFBSUEsWUFBTyxFQUFTO1lBWHBDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2pDLElBQUksS0FBSyxZQUFZQyxrQkFBZSxFQUFFO29CQUNyQyxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQ3RCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO3FCQUMxQjt5QkFBTTt3QkFDTixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ2I7aUJBQ0Q7YUFDRCxDQUFDLENBQUM7U0FDSDs7Ozs7UUFJRCw4QkFBRzs7OztZQUFILFVBQUksT0FBYztnQkFDakIsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCOzs7O1FBRUQscUNBQVU7OztZQUFWO2dCQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNsQzs7OztRQUVELGdDQUFLOzs7WUFBTDtnQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ25COztvQkFqQ0RDLGFBQVUsU0FBQzt3QkFDWCxVQUFVLEVBQUUsTUFBTTtxQkFDbEI7Ozs7O3dCQW5CUUMsU0FBTTs7OzsrQkFGZjs7O0lDQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0Esc0JBNEZ5QixDQUFD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