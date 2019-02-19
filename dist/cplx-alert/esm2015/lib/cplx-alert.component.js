/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQVMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBU3pDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFNOUIsWUFBb0IsSUFBc0I7UUFBdEIsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFIMUMsWUFBTyxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7UUFJNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ3JFLElBQUksS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekIsVUFBVTs7O29CQUFDLEdBQUcsRUFBRTt3QkFDZixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxDQUFDLEdBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtpQkFDekQ7YUFDRDtRQUNGLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUdELFdBQVc7UUFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsT0FBYztRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUN0QixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPO2dCQUNoQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU87b0JBQUUsT0FBTyxJQUFJLENBQUM7UUFDckQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFHRCxjQUFjLENBQUMsS0FBWSxFQUFFLEtBQUs7UUFDakMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDeEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNULENBQUM7Ozs7OztJQUdELFFBQVEsQ0FBQyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPO1NBQ1A7UUFFRCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDbkIsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDckIsT0FBTyxxQkFBcUIsQ0FBQztZQUM5QixLQUFLLFNBQVMsQ0FBQyxLQUFLO2dCQUNuQixPQUFPLG9CQUFvQixDQUFDO1lBQzdCLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2xCLE9BQU8sa0JBQWtCLENBQUM7WUFDM0IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDckIsT0FBTyxxQkFBcUIsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7OztJQUdELFlBQVksQ0FBQyxLQUFZO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPO1NBQ1A7UUFDRCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDbkIsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDckIsT0FBTyxnQkFBZ0IsQ0FBQztZQUN6QixLQUFLLFNBQVMsQ0FBQyxLQUFLO2dCQUNuQixPQUFPLGtCQUFrQixDQUFDO1lBQzNCLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2xCLE9BQU8sdUJBQXVCLENBQUM7WUFDaEMsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDckIsT0FBTyxhQUFhLENBQUM7U0FDdEI7SUFDRixDQUFDOzs7WUEvRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixreEJBQTBDOzthQUUxQzs7OztZQVJlLGdCQUFnQjs7O3NCQWM5QixLQUFLOzs7O0lBRk4sMENBQTJCOztJQUMzQixxQ0FBNkI7O0lBQzdCLHFDQUF5Qjs7Ozs7SUFFYixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnQsIENwbHhBbGVydFNlcnZpY2UsIEFsZXJ0VHlwZSB9IGZyb20gJy4vY3BseC1hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICd1dGlsJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2NwbHgtYWxlcnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9jcGx4LWFsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9jcGx4LWFsZXJ0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENwbHhBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG5cdHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGFsZXJ0YXMgPSBuZXcgQXJyYXk8QWxlcnQ+KCk7XHJcblx0QElucHV0KCkgdGltZW91dDogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbXM6IENwbHhBbGVydFNlcnZpY2UpIHtcclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fc21zLmdldEFsZXJ0YXMoKS5zdWJzY3JpYmUoKGFsZXJ0OiBBbGVydCkgPT4ge1xyXG5cdFx0XHRpZiAoYWxlcnQgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKGFsZXJ0Lm1lbnNhamUpKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnZhbGlkYXRlX21lbnNhamUoYWxlcnQpKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFsZXJ0YXMucHVzaChhbGVydCk7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVyTWVuc2FqZShhbGVydCwgdGhpcy5hbGVydGFzLmluZGV4T2YoYWxlcnQpKTtcclxuXHRcdFx0XHRcdH0sIGlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudGltZW91dCkgPyA1MDAwIDogdGhpcy50aW1lb3V0KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuc3Vic2NyaXB0aW9uKSlcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlX21lbnNhamUobWVuc2FqZTogQWxlcnQpIHtcclxuXHRcdGlmICh0aGlzLmFsZXJ0YXMubGVuZ3RoKVxyXG5cdFx0XHRmb3IgKGNvbnN0IGFsZXJ0YSBvZiB0aGlzLmFsZXJ0YXMpXHJcblx0XHRcdFx0aWYgKGFsZXJ0YS5tZW5zYWplID09IG1lbnNhamUubWVuc2FqZSkgcmV0dXJuIHRydWU7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblx0cmVtb3Zlck1lbnNhamUoYWxlcnQ6IEFsZXJ0LCBpbmRleCkge1xyXG5cdFx0YWxlcnQuY2xhc3MgPSAnbnMtaGlkZSc7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5hbGVydGFzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHR9LCAyMzApO1xyXG5cdH1cclxuXHJcblx0Ly9bbmdDbGFzc109XCJ7J2FsZXJ0LXN1Y2Nlc3MgdGV4dC1zdWNjZXNzJzogbS50aXBvID09IDEgLCdhbGVydC1kYW5nZXIgdGV4dC1kYW5nZXInOm0udGlwbyA9PSAyICwnYWxlcnQtd2FybmluZyB0ZXh0LXdhcm5pbmcnOm0udGlwbyA9PSAzICwnYWxlcnQtcHJpbWFyeSB0ZXh0LXByaW1hcnknOm0udGlwbyA9PSA0fVwiXHJcblx0Y3NzQ2xhc3MoYWxlcnQ6IEFsZXJ0KSB7XHJcblx0XHRpZiAoIWFsZXJ0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKGFsZXJ0LnRpcG8pIHtcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuU3VjY2VzczpcclxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5FcnJvcjpcclxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LWRhbmdlcic7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkluZm86XHJcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC1pbmZvJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuV2FybmluZzpcclxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LXdhcm5pbmcnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9bbmdDbGFzc109XCJ7J2ZhLXRodW1icy1vLXVwJzogbS50aXBvID09IDEgLCdmYS10aHVtYnMtby1kb3duJzptLnRpcG8gPT0gMiAsJ2ZhLWV4Y2xhbWF0aW9uLWNpcmNsZSc6bS50aXBvID09IDMgLCdmYS1idWxsc2V5ZSc6bS50aXBvID09IDR9XCJcclxuXHRjc3NDbGFzc0ljb24oYWxlcnQ6IEFsZXJ0KSB7XHJcblx0XHRpZiAoIWFsZXJ0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHN3aXRjaCAoYWxlcnQudGlwbykge1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5TdWNjZXNzOlxyXG5cdFx0XHRcdHJldHVybiAnZmEtdGh1bWJzLW8tdXAnO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5FcnJvcjpcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhLXRodW1icy1vLWRvd24nO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5JbmZvOlxyXG5cdFx0XHRcdHJldHVybiAnZmEtZXhjbGFtYXRpb24tY2lyY2xlJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuV2FybmluZzpcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhLWJ1bGxzZXllJztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19