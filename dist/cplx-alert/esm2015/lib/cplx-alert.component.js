/**
 * @fileoverview added by tsickle
 * Generated from: lib/cplx-alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CplxAlertService, AlertType } from './cplx-alert.service';
import { isNullOrUndefined } from 'util';
export class CplxAlertComponent {
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
                    /** @type {?} */
                    let timeout = isNullOrUndefined(this.timeout) ? 5000 : this.timeout;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.removerMensaje(alert, alert.id);
                    }), timeout);
                }
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.alertas.length > 0) {
            for (let index = 1; index < this.alertas.length; index++) {
                /** @type {?} */
                let timeout = (isNullOrUndefined(this.timeout) ? 5000 : this.timeout) + index + 1;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.removerMensaje(this.alertas[index], this.alertas[index].id);
                }), timeout);
            }
        }
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
     * @param {?} id
     * @return {?}
     */
    removerMensaje(alert, id) {
        alert.class = 'ns-hide';
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let idx = this.alertas.findIndex((/**
             * @param {?} a
             * @return {?}
             */
            a => a.id == id));
            this.alertas.splice(idx, 1);
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
                template: "<div class=\"alerta-mensaje\">\r\n\t<div *ngFor=\"let m of alertas; let i = index\"\r\n\t\tclass=\"{{cssClass(m)}} ns-growl ns-box ns-effect-scale {{m.class}} px-2\">\r\n\t\t<div class=\"sms-box-inner\">\r\n\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t<div class=\"pr-2 center-center\">\r\n\t\t\t\t\t<i class=\"fa fa-2x\" [ngClass]=\"{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,\r\n\t\t\t\t\t\t'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<label>{{m.mensaje}}</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i class=\"fa fa-times-circle fa-lg close\" aria-hidden=\"true\" style=\"cursor:pointer\"\r\n\t\t\t(click)=\"removerMensaje(m,i)\"></i>\r\n\t</div>\r\n</div>\r\n",
                styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;min-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.center-center{display:flex;flex-direction:column;justify-content:center;align-items:center}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
            }] }
];
/** @nocollapse */
CplxAlertComponent.ctorParameters = () => [
    { type: CplxAlertService }
];
CplxAlertComponent.propDecorators = {
    alertas: [{ type: Input }],
    timeout: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBUyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTekMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQU05QixZQUFvQixJQUFzQjtRQUF0QixTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUhqQyxZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQztRQUlyQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDckUsSUFBSSxLQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzt3QkFDckIsT0FBTyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztvQkFDbkUsVUFBVTs7O29CQUFDLEdBQUcsRUFBRTt3QkFDZixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3RDLENBQUMsR0FBRSxPQUFPLENBQUMsQ0FBQTtpQkFDWDthQUNEO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7O29CQUNyRCxPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDO2dCQUNqRixVQUFVOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDLEdBQUUsT0FBTyxDQUFDLENBQUE7YUFDWDtTQUNEO0lBQ0YsQ0FBQzs7OztJQUdELFdBQVc7UUFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsT0FBYztRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUN0QixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPO2dCQUNoQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU87b0JBQUUsT0FBTyxJQUFJLENBQUM7UUFDckQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFHRCxjQUFjLENBQUMsS0FBWSxFQUFFLEVBQVU7UUFDdEMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDeEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFOztnQkFDWCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQztZQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7Ozs7O0lBR0QsUUFBUSxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU87U0FDUDtRQUVELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLHFCQUFxQixDQUFDO1lBQzlCLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ25CLE9BQU8sb0JBQW9CLENBQUM7WUFDN0IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDbEIsT0FBTyxrQkFBa0IsQ0FBQztZQUMzQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLHFCQUFxQixDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7Ozs7O0lBR0QsWUFBWSxDQUFDLEtBQVk7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU87U0FDUDtRQUNELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLGdCQUFnQixDQUFDO1lBQ3pCLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ25CLE9BQU8sa0JBQWtCLENBQUM7WUFDM0IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDbEIsT0FBTyx1QkFBdUIsQ0FBQztZQUNoQyxLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLGFBQWEsQ0FBQztTQUN0QjtJQUNGLENBQUM7OztZQTVGRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLGl4QkFBMEM7O2FBRTFDOzs7O1lBUmUsZ0JBQWdCOzs7c0JBYTlCLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUZOLDBDQUEyQjs7SUFDM0IscUNBQXNDOztJQUN0QyxxQ0FBeUI7Ozs7O0lBRWIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnQsIENwbHhBbGVydFNlcnZpY2UsIEFsZXJ0VHlwZSB9IGZyb20gJy4vY3BseC1hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICd1dGlsJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2NwbHgtYWxlcnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9jcGx4LWFsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9jcGx4LWFsZXJ0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENwbHhBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuXHJcblx0c3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0QElucHV0KCkgYWxlcnRhcyA9IG5ldyBBcnJheTxBbGVydD4oKTtcclxuXHRASW5wdXQoKSB0aW1lb3V0OiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3NtczogQ3BseEFsZXJ0U2VydmljZSkge1xyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9zbXMuZ2V0QWxlcnRhcygpLnN1YnNjcmliZSgoYWxlcnQ6IEFsZXJ0KSA9PiB7XHJcblx0XHRcdGlmIChhbGVydCAmJiAhaXNOdWxsT3JVbmRlZmluZWQoYWxlcnQubWVuc2FqZSkpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMudmFsaWRhdGVfbWVuc2FqZShhbGVydCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuYWxlcnRhcy5wdXNoKGFsZXJ0KTtcclxuXHRcdFx0XHRcdGxldCB0aW1lb3V0ID0gaXNOdWxsT3JVbmRlZmluZWQodGhpcy50aW1lb3V0KSA/IDUwMDAgOiB0aGlzLnRpbWVvdXQ7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVyTWVuc2FqZShhbGVydCwgYWxlcnQuaWQpO1xyXG5cdFx0XHRcdFx0fSwgdGltZW91dClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuYWxlcnRhcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCB0aGlzLmFsZXJ0YXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdFx0bGV0IHRpbWVvdXQgPSAoaXNOdWxsT3JVbmRlZmluZWQodGhpcy50aW1lb3V0KSA/IDUwMDAgOiB0aGlzLnRpbWVvdXQpICsgaW5kZXggKyAxO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVyTWVuc2FqZSh0aGlzLmFsZXJ0YXNbaW5kZXhdLCB0aGlzLmFsZXJ0YXNbaW5kZXhdLmlkKTtcclxuXHRcdFx0XHR9LCB0aW1lb3V0KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuc3Vic2NyaXB0aW9uKSlcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlX21lbnNhamUobWVuc2FqZTogQWxlcnQpIHtcclxuXHRcdGlmICh0aGlzLmFsZXJ0YXMubGVuZ3RoKVxyXG5cdFx0XHRmb3IgKGNvbnN0IGFsZXJ0YSBvZiB0aGlzLmFsZXJ0YXMpXHJcblx0XHRcdFx0aWYgKGFsZXJ0YS5tZW5zYWplID09IG1lbnNhamUubWVuc2FqZSkgcmV0dXJuIHRydWU7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblx0cmVtb3Zlck1lbnNhamUoYWxlcnQ6IEFsZXJ0LCBpZDogc3RyaW5nKSB7XHJcblx0XHRhbGVydC5jbGFzcyA9ICducy1oaWRlJztcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRsZXQgaWR4ID0gdGhpcy5hbGVydGFzLmZpbmRJbmRleChhID0+IGEuaWQgPT0gaWQpO1xyXG5cdFx0XHR0aGlzLmFsZXJ0YXMuc3BsaWNlKGlkeCwgMSk7XHJcblx0XHR9LCAyMzApO1xyXG5cdH1cclxuXHJcblx0Ly9bbmdDbGFzc109XCJ7J2FsZXJ0LXN1Y2Nlc3MgdGV4dC1zdWNjZXNzJzogbS50aXBvID09IDEgLCdhbGVydC1kYW5nZXIgdGV4dC1kYW5nZXInOm0udGlwbyA9PSAyICwnYWxlcnQtd2FybmluZyB0ZXh0LXdhcm5pbmcnOm0udGlwbyA9PSAzICwnYWxlcnQtcHJpbWFyeSB0ZXh0LXByaW1hcnknOm0udGlwbyA9PSA0fVwiXHJcblx0Y3NzQ2xhc3MoYWxlcnQ6IEFsZXJ0KSB7XHJcblx0XHRpZiAoIWFsZXJ0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKGFsZXJ0LnRpcG8pIHtcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuU3VjY2VzczpcclxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5FcnJvcjpcclxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LWRhbmdlcic7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkluZm86XHJcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC1pbmZvJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuV2FybmluZzpcclxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LXdhcm5pbmcnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9bbmdDbGFzc109XCJ7J2ZhLXRodW1icy1vLXVwJzogbS50aXBvID09IDEgLCdmYS10aHVtYnMtby1kb3duJzptLnRpcG8gPT0gMiAsJ2ZhLWV4Y2xhbWF0aW9uLWNpcmNsZSc6bS50aXBvID09IDMgLCdmYS1idWxsc2V5ZSc6bS50aXBvID09IDR9XCJcclxuXHRjc3NDbGFzc0ljb24oYWxlcnQ6IEFsZXJ0KSB7XHJcblx0XHRpZiAoIWFsZXJ0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHN3aXRjaCAoYWxlcnQudGlwbykge1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5TdWNjZXNzOlxyXG5cdFx0XHRcdHJldHVybiAnZmEtdGh1bWJzLW8tdXAnO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5FcnJvcjpcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhLXRodW1icy1vLWRvd24nO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5JbmZvOlxyXG5cdFx0XHRcdHJldHVybiAnZmEtZXhjbGFtYXRpb24tY2lyY2xlJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuV2FybmluZzpcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhLWJ1bGxzZXllJztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19