/**
 * @fileoverview added by tsickle
 * Generated from: lib/cplx-alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
import { Component, Input } from '@angular/core';
import { CplxAlertService, AlertType } from './cplx-alert.service';
import { isNullOrUndefined } from 'util';
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
    CplxAlertComponent.decorators = [
        { type: Component, args: [{
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
        alertas: [{ type: Input }],
        timeout: [{ type: Input }]
    };
    return CplxAlertComponent;
}());
export { CplxAlertComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQVMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3pDO0lBWUMsNEJBQW9CLElBQXNCO1FBQTFDLGlCQVlDO1FBWm1CLFNBQUksR0FBSixJQUFJLENBQWtCO1FBSGpDLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBUyxDQUFDO1FBSXJDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFZO1lBQ2pFLElBQUksS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNsQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7d0JBQ3JCLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU87b0JBQ25FLFVBQVU7OztvQkFBQzt3QkFDVixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3RDLENBQUMsR0FBRSxPQUFPLENBQUMsQ0FBQTtpQkFDWDthQUNEO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkFTQztRQVJBLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29DQUNuQixLQUFLOztvQkFDVCxPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQUssT0FBTyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUM7Z0JBQ2pGLFVBQVU7OztnQkFBQztvQkFDVixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEUsQ0FBQyxHQUFFLE9BQU8sQ0FBQyxDQUFBOzs7WUFKWixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO3dCQUEvQyxLQUFLO2FBS2I7U0FDRDtJQUNGLENBQUM7Ozs7SUFHRCx3Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLE9BQWM7O1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztnQkFDdEIsS0FBcUIsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQSxnQkFBQTtvQkFBNUIsSUFBTSxNQUFNLFdBQUE7b0JBQ2hCLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTzt3QkFBRSxPQUFPLElBQUksQ0FBQztpQkFBQTs7Ozs7Ozs7YUFBQTtRQUNyRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUdELDJDQUFjOzs7OztJQUFkLFVBQWUsS0FBWSxFQUFFLEVBQVU7UUFBdkMsaUJBTUM7UUFMQSxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN4QixVQUFVOzs7UUFBQzs7Z0JBQ04sR0FBRyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxFQUFDO1lBQ2pELEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQscUxBQXFMOzs7Ozs7SUFDckwscUNBQVE7Ozs7OztJQUFSLFVBQVMsS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTztTQUNQO1FBRUQsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8scUJBQXFCLENBQUM7WUFDOUIsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbkIsT0FBTyxvQkFBb0IsQ0FBQztZQUM3QixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLGtCQUFrQixDQUFDO1lBQzNCLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8scUJBQXFCLENBQUM7U0FDOUI7SUFDRixDQUFDO0lBRUQsNklBQTZJOzs7Ozs7SUFDN0kseUNBQVk7Ozs7OztJQUFaLFVBQWEsS0FBWTtRQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTztTQUNQO1FBQ0QsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8sZ0JBQWdCLENBQUM7WUFDekIsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbkIsT0FBTyxrQkFBa0IsQ0FBQztZQUMzQixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLHVCQUF1QixDQUFDO1lBQ2hDLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7Z0JBNUZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsaXhCQUEwQzs7aUJBRTFDOzs7O2dCQVJlLGdCQUFnQjs7OzBCQWE5QixLQUFLOzBCQUNMLEtBQUs7O0lBbUZQLHlCQUFDO0NBQUEsQUE3RkQsSUE2RkM7U0F2Rlksa0JBQWtCOzs7SUFFOUIsMENBQTJCOztJQUMzQixxQ0FBc0M7O0lBQ3RDLHFDQUF5Qjs7Ozs7SUFFYixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydCwgQ3BseEFsZXJ0U2VydmljZSwgQWxlcnRUeXBlIH0gZnJvbSAnLi9jcGx4LWFsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gJ3V0aWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY3BseC1hbGVydCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2NwbHgtYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2NwbHgtYWxlcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3BseEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cclxuXHRzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRASW5wdXQoKSBhbGVydGFzID0gbmV3IEFycmF5PEFsZXJ0PigpO1xyXG5cdEBJbnB1dCgpIHRpbWVvdXQ6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc21zOiBDcGx4QWxlcnRTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX3Ntcy5nZXRBbGVydGFzKCkuc3Vic2NyaWJlKChhbGVydDogQWxlcnQpID0+IHtcclxuXHRcdFx0aWYgKGFsZXJ0ICYmICFpc051bGxPclVuZGVmaW5lZChhbGVydC5tZW5zYWplKSkge1xyXG5cdFx0XHRcdGlmICghdGhpcy52YWxpZGF0ZV9tZW5zYWplKGFsZXJ0KSkge1xyXG5cdFx0XHRcdFx0dGhpcy5hbGVydGFzLnB1c2goYWxlcnQpO1xyXG5cdFx0XHRcdFx0bGV0IHRpbWVvdXQgPSBpc051bGxPclVuZGVmaW5lZCh0aGlzLnRpbWVvdXQpID8gNTAwMCA6IHRoaXMudGltZW91dDtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbW92ZXJNZW5zYWplKGFsZXJ0LCBhbGVydC5pZCk7XHJcblx0XHRcdFx0XHR9LCB0aW1lb3V0KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5hbGVydGFzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHRoaXMuYWxlcnRhcy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0XHRsZXQgdGltZW91dCA9IChpc051bGxPclVuZGVmaW5lZCh0aGlzLnRpbWVvdXQpID8gNTAwMCA6IHRoaXMudGltZW91dCkgKyBpbmRleCArIDE7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZXJNZW5zYWplKHRoaXMuYWxlcnRhc1tpbmRleF0sIHRoaXMuYWxlcnRhc1tpbmRleF0uaWQpO1xyXG5cdFx0XHRcdH0sIHRpbWVvdXQpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICghaXNOdWxsT3JVbmRlZmluZWQodGhpcy5zdWJzY3JpcHRpb24pKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGVfbWVuc2FqZShtZW5zYWplOiBBbGVydCkge1xyXG5cdFx0aWYgKHRoaXMuYWxlcnRhcy5sZW5ndGgpXHJcblx0XHRcdGZvciAoY29uc3QgYWxlcnRhIG9mIHRoaXMuYWxlcnRhcylcclxuXHRcdFx0XHRpZiAoYWxlcnRhLm1lbnNhamUgPT0gbWVuc2FqZS5tZW5zYWplKSByZXR1cm4gdHJ1ZTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW1vdmVyTWVuc2FqZShhbGVydDogQWxlcnQsIGlkOiBzdHJpbmcpIHtcclxuXHRcdGFsZXJ0LmNsYXNzID0gJ25zLWhpZGUnO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGxldCBpZHggPSB0aGlzLmFsZXJ0YXMuZmluZEluZGV4KGEgPT4gYS5pZCA9PSBpZCk7XHJcblx0XHRcdHRoaXMuYWxlcnRhcy5zcGxpY2UoaWR4LCAxKTtcclxuXHRcdH0sIDIzMCk7XHJcblx0fVxyXG5cclxuXHQvL1tuZ0NsYXNzXT1cInsnYWxlcnQtc3VjY2VzcyB0ZXh0LXN1Y2Nlc3MnOiBtLnRpcG8gPT0gMSAsJ2FsZXJ0LWRhbmdlciB0ZXh0LWRhbmdlcic6bS50aXBvID09IDIgLCdhbGVydC13YXJuaW5nIHRleHQtd2FybmluZyc6bS50aXBvID09IDMgLCdhbGVydC1wcmltYXJ5IHRleHQtcHJpbWFyeSc6bS50aXBvID09IDR9XCJcclxuXHRjc3NDbGFzcyhhbGVydDogQWxlcnQpIHtcclxuXHRcdGlmICghYWxlcnQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCAoYWxlcnQudGlwbykge1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5TdWNjZXNzOlxyXG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtc3VjY2Vzcyc7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkVycm9yOlxyXG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtZGFuZ2VyJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuSW5mbzpcclxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LWluZm8nO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxyXG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtd2FybmluZyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL1tuZ0NsYXNzXT1cInsnZmEtdGh1bWJzLW8tdXAnOiBtLnRpcG8gPT0gMSAsJ2ZhLXRodW1icy1vLWRvd24nOm0udGlwbyA9PSAyICwnZmEtZXhjbGFtYXRpb24tY2lyY2xlJzptLnRpcG8gPT0gMyAsJ2ZhLWJ1bGxzZXllJzptLnRpcG8gPT0gNH1cIlxyXG5cdGNzc0NsYXNzSWNvbihhbGVydDogQWxlcnQpIHtcclxuXHRcdGlmICghYWxlcnQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c3dpdGNoIChhbGVydC50aXBvKSB7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLlN1Y2Nlc3M6XHJcblx0XHRcdFx0cmV0dXJuICdmYS10aHVtYnMtby11cCc7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkVycm9yOlxyXG5cdFx0XHRcdHJldHVybiAnZmEtdGh1bWJzLW8tZG93bic7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkluZm86XHJcblx0XHRcdFx0cmV0dXJuICdmYS1leGNsYW1hdGlvbi1jaXJjbGUnO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxyXG5cdFx0XHRcdHJldHVybiAnZmEtYnVsbHNleWUnO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=