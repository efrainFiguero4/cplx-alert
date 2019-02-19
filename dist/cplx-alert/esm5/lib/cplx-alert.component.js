/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.removerMensaje(alert, _this.alertas.indexOf(alert));
                    }), isNullOrUndefined(_this.timeout) ? 5000 : _this.timeout);
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
                    template: "<div class=\"alerta-mensaje\">\r\n\t<div *ngFor=\"let m of alertas; let i = index\"\r\n\t\tclass=\"{{cssClass(m)}} ns-growl ns-box ns-effect-scale {{m.class}} px-2\">\r\n\t\t<div class=\"sms-box-inner\">\r\n\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t<div class=\"pr-2 center-center\">\r\n\t\t\t\t\t<i class=\"fa fa-2x\" [ngClass]=\"{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,\r\n\t\t\t\t\t\t'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<label>{{m.mensaje}}.</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i class=\"fa fa-times-circle fa-lg close\" aria-hidden=\"true\" style=\"cursor:pointer\"\r\n\t\t\t(click)=\"removerMensaje(m,i)\"></i>\r\n\t</div>\r\n</div>\r\n",
                    styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;min-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.center-center{display:flex;flex-direction:column;justify-content:center;align-items:center}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
                }] }
    ];
    /** @nocollapse */
    CplxAlertComponent.ctorParameters = function () { return [
        { type: CplxAlertService }
    ]; };
    CplxAlertComponent.propDecorators = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFTLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd6QztJQVlDLDRCQUFvQixJQUFzQjtRQUExQyxpQkFXQztRQVhtQixTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUgxQyxZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQztRQUk1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBWTtZQUNqRSxJQUFJLEtBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDbEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLFVBQVU7OztvQkFBQzt3QkFDVixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxDQUFDLEdBQUUsaUJBQWlCLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtpQkFDekQ7YUFDRDtRQUNGLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUdELHdDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsT0FBYzs7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07O2dCQUN0QixLQUFxQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQSxnQkFBQTtvQkFBNUIsSUFBTSxNQUFNLFdBQUE7b0JBQ2hCLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTzt3QkFBRSxPQUFPLElBQUksQ0FBQztpQkFBQTs7Ozs7Ozs7YUFBQTtRQUNyRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUdELDJDQUFjOzs7OztJQUFkLFVBQWUsS0FBWSxFQUFFLEtBQUs7UUFBbEMsaUJBS0M7UUFKQSxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN4QixVQUFVOzs7UUFBQztZQUNWLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQscUxBQXFMOzs7Ozs7SUFDckwscUNBQVE7Ozs7OztJQUFSLFVBQVMsS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTztTQUNQO1FBRUQsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8scUJBQXFCLENBQUM7WUFDOUIsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbkIsT0FBTyxvQkFBb0IsQ0FBQztZQUM3QixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLGtCQUFrQixDQUFDO1lBQzNCLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8scUJBQXFCLENBQUM7U0FDOUI7SUFDRixDQUFDO0lBRUQsNklBQTZJOzs7Ozs7SUFDN0kseUNBQVk7Ozs7OztJQUFaLFVBQWEsS0FBWTtRQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTztTQUNQO1FBQ0QsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8sZ0JBQWdCLENBQUM7WUFDekIsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbkIsT0FBTyxrQkFBa0IsQ0FBQztZQUMzQixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLHVCQUF1QixDQUFDO1lBQ2hDLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7Z0JBL0VELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsa3hCQUEwQzs7aUJBRTFDOzs7O2dCQVJlLGdCQUFnQjs7OzBCQWM5QixLQUFLOztJQXNFUCx5QkFBQztDQUFBLEFBaEZELElBZ0ZDO1NBMUVZLGtCQUFrQjs7O0lBRTlCLDBDQUEyQjs7SUFDM0IscUNBQTZCOztJQUM3QixxQ0FBeUI7Ozs7O0lBRWIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0LCBDcGx4QWxlcnRTZXJ2aWNlLCBBbGVydFR5cGUgfSBmcm9tICcuL2NwbHgtYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndXRpbCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjcGx4LWFsZXJ0JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vY3BseC1hbGVydC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vY3BseC1hbGVydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcGx4QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuXHRzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRhbGVydGFzID0gbmV3IEFycmF5PEFsZXJ0PigpO1xyXG5cdEBJbnB1dCgpIHRpbWVvdXQ6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc21zOiBDcGx4QWxlcnRTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX3Ntcy5nZXRBbGVydGFzKCkuc3Vic2NyaWJlKChhbGVydDogQWxlcnQpID0+IHtcclxuXHRcdFx0aWYgKGFsZXJ0ICYmICFpc051bGxPclVuZGVmaW5lZChhbGVydC5tZW5zYWplKSkge1xyXG5cdFx0XHRcdGlmICghdGhpcy52YWxpZGF0ZV9tZW5zYWplKGFsZXJ0KSkge1xyXG5cdFx0XHRcdFx0dGhpcy5hbGVydGFzLnB1c2goYWxlcnQpO1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVtb3Zlck1lbnNhamUoYWxlcnQsIHRoaXMuYWxlcnRhcy5pbmRleE9mKGFsZXJ0KSk7XHJcblx0XHRcdFx0XHR9LCBpc051bGxPclVuZGVmaW5lZCh0aGlzLnRpbWVvdXQpID8gNTAwMCA6IHRoaXMudGltZW91dClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYgKCFpc051bGxPclVuZGVmaW5lZCh0aGlzLnN1YnNjcmlwdGlvbikpXHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZV9tZW5zYWplKG1lbnNhamU6IEFsZXJ0KSB7XHJcblx0XHRpZiAodGhpcy5hbGVydGFzLmxlbmd0aClcclxuXHRcdFx0Zm9yIChjb25zdCBhbGVydGEgb2YgdGhpcy5hbGVydGFzKVxyXG5cdFx0XHRcdGlmIChhbGVydGEubWVuc2FqZSA9PSBtZW5zYWplLm1lbnNhamUpIHJldHVybiB0cnVlO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbW92ZXJNZW5zYWplKGFsZXJ0OiBBbGVydCwgaW5kZXgpIHtcclxuXHRcdGFsZXJ0LmNsYXNzID0gJ25zLWhpZGUnO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuYWxlcnRhcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0fSwgMjMwKTtcclxuXHR9XHJcblxyXG5cdC8vW25nQ2xhc3NdPVwieydhbGVydC1zdWNjZXNzIHRleHQtc3VjY2Vzcyc6IG0udGlwbyA9PSAxICwnYWxlcnQtZGFuZ2VyIHRleHQtZGFuZ2VyJzptLnRpcG8gPT0gMiAsJ2FsZXJ0LXdhcm5pbmcgdGV4dC13YXJuaW5nJzptLnRpcG8gPT0gMyAsJ2FsZXJ0LXByaW1hcnkgdGV4dC1wcmltYXJ5JzptLnRpcG8gPT0gNH1cIlxyXG5cdGNzc0NsYXNzKGFsZXJ0OiBBbGVydCkge1xyXG5cdFx0aWYgKCFhbGVydCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoIChhbGVydC50aXBvKSB7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLlN1Y2Nlc3M6XHJcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC1zdWNjZXNzJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuRXJyb3I6XHJcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC1kYW5nZXInO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5JbmZvOlxyXG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtaW5mbyc7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLldhcm5pbmc6XHJcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC13YXJuaW5nJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vW25nQ2xhc3NdPVwieydmYS10aHVtYnMtby11cCc6IG0udGlwbyA9PSAxICwnZmEtdGh1bWJzLW8tZG93bic6bS50aXBvID09IDIgLCdmYS1leGNsYW1hdGlvbi1jaXJjbGUnOm0udGlwbyA9PSAzICwnZmEtYnVsbHNleWUnOm0udGlwbyA9PSA0fVwiXHJcblx0Y3NzQ2xhc3NJY29uKGFsZXJ0OiBBbGVydCkge1xyXG5cdFx0aWYgKCFhbGVydCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzd2l0Y2ggKGFsZXJ0LnRpcG8pIHtcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuU3VjY2VzczpcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhLXRodW1icy1vLXVwJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuRXJyb3I6XHJcblx0XHRcdFx0cmV0dXJuICdmYS10aHVtYnMtby1kb3duJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuSW5mbzpcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhLWV4Y2xhbWF0aW9uLWNpcmNsZSc7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLldhcm5pbmc6XHJcblx0XHRcdFx0cmV0dXJuICdmYS1idWxsc2V5ZSc7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==