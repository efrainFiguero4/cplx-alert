(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/router'), require('util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('cplx-alert', ['exports', '@angular/core', 'rxjs', '@angular/router', 'util', '@angular/common'], factory) :
    (global = global || self, factory(global['cplx-alert'] = {}, global.ng.core, global.rxjs, global.ng.router, global.util, global.ng.common));
}(this, (function (exports, core, rxjs, router, util, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cplx-alert.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
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
        function CplxAlertService(router$1) {
            var _this = this;
            this.router = router$1;
            this.routerchange = false;
            this.alerta = new rxjs.Subject();
            this.router.events.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event instanceof router.NavigationStart) {
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CplxAlertService.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        /** @nocollapse */ CplxAlertService.ɵprov = core.ɵɵdefineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(core.ɵɵinject(router.Router)); }, token: CplxAlertService, providedIn: "root" });
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
                if (alert && !util.isNullOrUndefined(alert.mensaje)) {
                    if (!_this.validate_mensaje(alert)) {
                        _this.alertas.push(alert);
                        /** @type {?} */
                        var timeout = util.isNullOrUndefined(_this.timeout) ? 5000 : _this.timeout;
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
                    var timeout = (util.isNullOrUndefined(this_1.timeout) ? 5000 : this_1.timeout) + index + 1;
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
        CplxAlertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cplx-alert',
                        template: "<div class=\"alerta-mensaje\">\r\n\t<div *ngFor=\"let m of alertas; let i = index\"\r\n\t\tclass=\"{{cssClass(m)}} ns-growl ns-box ns-effect-scale {{m.class}} px-2\">\r\n\t\t<div class=\"sms-box-inner\">\r\n\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t<div class=\"pr-2 center-center\">\r\n\t\t\t\t\t<i class=\"fa fa-2x\" [ngClass]=\"{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,\r\n\t\t\t\t\t\t'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<label>{{m.mensaje}}</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i class=\"fa fa-times-circle fa-lg close\" aria-hidden=\"true\" style=\"cursor:pointer\"\r\n\t\t\t(click)=\"removerMensaje(m,i)\"></i>\r\n\t</div>\r\n</div>\r\n",
                        styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;min-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.center-center{display:flex;flex-direction:column;justify-content:center;align-items:center}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
                    }] }
        ];
        /** @nocollapse */
        CplxAlertComponent.ctorParameters = function () { return [
            { type: CplxAlertService }
        ]; };
        CplxAlertComponent.propDecorators = {
            alertas: [{ type: core.Input }],
            timeout: [{ type: core.Input }]
        };
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
                providers: [CplxAlertService, router.RouterModule]
            };
        };
        CplxAlertModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule],
                        declarations: [CplxAlertComponent],
                        exports: [CplxAlertComponent],
                        providers: [CplxAlertService]
                    },] }
        ];
        return CplxAlertModule;
    }());

    exports.AlertType = AlertType;
    exports.CplxAlertModule = CplxAlertModule;
    exports.CplxAlertService = CplxAlertService;
    exports.ɵa = CplxAlertComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cplx-alert.umd.js.map
