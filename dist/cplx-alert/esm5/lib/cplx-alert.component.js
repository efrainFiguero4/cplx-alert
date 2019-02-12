/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
                for (var _b = tslib_1.__values(this.alertas), _c = _b.next(); !_c.done; _c = _b.next()) {
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
export { CplxAlertComponent };
if (false) {
    /** @type {?} */
    CplxAlertComponent.prototype.subscription;
    /** @type {?} */
    CplxAlertComponent.prototype.alertas;
    /**
     * @type {?}
     * @private
     */
    CplxAlertComponent.prototype._sms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3pDO0lBV0MsNEJBQW9CLElBQXNCO1FBQTFDLGlCQVdDO1FBWG1CLFNBQUksR0FBSixJQUFJLENBQWtCO1FBRjFDLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBUyxDQUFDO1FBRzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFZO1lBQ2pFLElBQUksS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNsQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekIsVUFBVTs7O29CQUFDO3dCQUNWLDBEQUEwRDtvQkFDM0QsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFBO2lCQUNSO2FBQ0Q7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFHRCx3Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLE9BQWM7O1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztnQkFDdEIsS0FBcUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxPQUFPLENBQUEsZ0JBQUE7b0JBQTVCLElBQU0sTUFBTSxXQUFBO29CQUNoQixJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU87d0JBQUUsT0FBTyxJQUFJLENBQUM7aUJBQUE7Ozs7Ozs7O2FBQUE7UUFDckQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFHRCwyQ0FBYzs7Ozs7SUFBZCxVQUFlLEtBQVksRUFBRSxLQUFLO1FBQWxDLGlCQUtDO1FBSkEsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDeEIsVUFBVTs7O1FBQUM7WUFDVixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELHFMQUFxTDs7Ozs7O0lBQ3JMLHFDQUFROzs7Ozs7SUFBUixVQUFTLEtBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU87U0FDUDtRQUVELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLHFCQUFxQixDQUFDO1lBQzlCLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ25CLE9BQU8sb0JBQW9CLENBQUM7WUFDN0IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDbEIsT0FBTyxrQkFBa0IsQ0FBQztZQUMzQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLHFCQUFxQixDQUFDO1NBQzlCO0lBQ0YsQ0FBQztJQUVELDZJQUE2STs7Ozs7O0lBQzdJLHlDQUFZOzs7Ozs7SUFBWixVQUFhLEtBQVk7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU87U0FDUDtRQUNELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLGdCQUFnQixDQUFDO1lBQ3pCLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ25CLE9BQU8sa0JBQWtCLENBQUM7WUFDM0IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDbEIsT0FBTyx1QkFBdUIsQ0FBQztZQUNoQyxLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLGFBQWEsQ0FBQztTQUN0QjtJQUNGLENBQUM7O2dCQTlFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHN3QkFBMEM7O2lCQUUxQzs7OztnQkFSZSxnQkFBZ0I7O0lBbUZoQyx5QkFBQztDQUFBLEFBL0VELElBK0VDO1NBekVZLGtCQUFrQjs7O0lBRTlCLDBDQUEyQjs7SUFDM0IscUNBQTZCOzs7OztJQUVqQixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydCwgQ3BseEFsZXJ0U2VydmljZSwgQWxlcnRUeXBlIH0gZnJvbSAnLi9jcGx4LWFsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gJ3V0aWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY3BseC1hbGVydCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2NwbHgtYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2NwbHgtYWxlcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3BseEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcblx0c3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0YWxlcnRhcyA9IG5ldyBBcnJheTxBbGVydD4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc21zOiBDcGx4QWxlcnRTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX3Ntcy5nZXRBbGVydGFzKCkuc3Vic2NyaWJlKChhbGVydDogQWxlcnQpID0+IHtcclxuXHRcdFx0aWYgKGFsZXJ0ICYmICFpc051bGxPclVuZGVmaW5lZChhbGVydC5tZW5zYWplKSkge1xyXG5cdFx0XHRcdGlmICghdGhpcy52YWxpZGF0ZV9tZW5zYWplKGFsZXJ0KSkge1xyXG5cdFx0XHRcdFx0dGhpcy5hbGVydGFzLnB1c2goYWxlcnQpO1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vdGhpcy5yZW1vdmVyTWVuc2FqZShhbGVydCwgdGhpcy5hbGVydGFzLmluZGV4T2YoYWxlcnQpKTtcclxuXHRcdFx0XHRcdH0sIDUwMDApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICghaXNOdWxsT3JVbmRlZmluZWQodGhpcy5zdWJzY3JpcHRpb24pKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGVfbWVuc2FqZShtZW5zYWplOiBBbGVydCkge1xyXG5cdFx0aWYgKHRoaXMuYWxlcnRhcy5sZW5ndGgpXHJcblx0XHRcdGZvciAoY29uc3QgYWxlcnRhIG9mIHRoaXMuYWxlcnRhcylcclxuXHRcdFx0XHRpZiAoYWxlcnRhLm1lbnNhamUgPT0gbWVuc2FqZS5tZW5zYWplKSByZXR1cm4gdHJ1ZTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW1vdmVyTWVuc2FqZShhbGVydDogQWxlcnQsIGluZGV4KSB7XHJcblx0XHRhbGVydC5jbGFzcyA9ICducy1oaWRlJztcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmFsZXJ0YXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdH0sIDIzMCk7XHJcblx0fVxyXG5cclxuXHQvL1tuZ0NsYXNzXT1cInsnYWxlcnQtc3VjY2VzcyB0ZXh0LXN1Y2Nlc3MnOiBtLnRpcG8gPT0gMSAsJ2FsZXJ0LWRhbmdlciB0ZXh0LWRhbmdlcic6bS50aXBvID09IDIgLCdhbGVydC13YXJuaW5nIHRleHQtd2FybmluZyc6bS50aXBvID09IDMgLCdhbGVydC1wcmltYXJ5IHRleHQtcHJpbWFyeSc6bS50aXBvID09IDR9XCJcclxuXHRjc3NDbGFzcyhhbGVydDogQWxlcnQpIHtcclxuXHRcdGlmICghYWxlcnQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCAoYWxlcnQudGlwbykge1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5TdWNjZXNzOlxyXG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtc3VjY2Vzcyc7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkVycm9yOlxyXG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtZGFuZ2VyJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuSW5mbzpcclxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LWluZm8nO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxyXG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtd2FybmluZyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL1tuZ0NsYXNzXT1cInsnZmEtdGh1bWJzLW8tdXAnOiBtLnRpcG8gPT0gMSAsJ2ZhLXRodW1icy1vLWRvd24nOm0udGlwbyA9PSAyICwnZmEtZXhjbGFtYXRpb24tY2lyY2xlJzptLnRpcG8gPT0gMyAsJ2ZhLWJ1bGxzZXllJzptLnRpcG8gPT0gNH1cIlxyXG5cdGNzc0NsYXNzSWNvbihhbGVydDogQWxlcnQpIHtcclxuXHRcdGlmICghYWxlcnQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c3dpdGNoIChhbGVydC50aXBvKSB7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLlN1Y2Nlc3M6XHJcblx0XHRcdFx0cmV0dXJuICdmYS10aHVtYnMtby11cCc7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkVycm9yOlxyXG5cdFx0XHRcdHJldHVybiAnZmEtdGh1bWJzLW8tZG93bic7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkluZm86XHJcblx0XHRcdFx0cmV0dXJuICdmYS1leGNsYW1hdGlvbi1jaXJjbGUnO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxyXG5cdFx0XHRcdHJldHVybiAnZmEtYnVsbHNleWUnO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=