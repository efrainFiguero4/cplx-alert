/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
                        //this.removerMensaje(alert, this.alertas.indexOf(alert));
                    }), 5000);
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
                template: "<div class=\"alerta-mensaje\">\r\n\t<div *ngFor=\"let m of alertas; let i = index\" class=\"{{cssClass(m)}} ns-growl ns-box ns-effect-scale {{m.class}}\">\r\n\t\t<div class=\"sms-box-inner\">\r\n\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t<div class=\"pr-2 center-center\">\r\n\t\t\t\t\t<i class=\"fa fa-2x\" [ngClass]=\"{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,\r\n\t\t\t\t\t\t'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<label>{{m.mensaje}}.</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i class=\"fa fa-times-circle fa-lg close\" aria-hidden=\"true\" style=\"cursor:pointer\"\r\n\t\t\t(click)=\"removerMensaje(m,i)\"></i>\r\n\t</div>\r\n</div>\r\n",
                styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;min-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.center-center{display:flex;flex-direction:column;justify-content:center;align-items:center}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
            }] }
];
/** @nocollapse */
CplxAlertComponent.ctorParameters = () => [
    { type: CplxAlertService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBUyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTekMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUs5QixZQUFvQixJQUFzQjtRQUF0QixTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUYxQyxZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQztRQUc1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDckUsSUFBSSxLQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QixVQUFVOzs7b0JBQUMsR0FBRyxFQUFFO3dCQUNmLDBEQUEwRDtvQkFDM0QsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFBO2lCQUNSO2FBQ0Q7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE9BQWM7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDdEIsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTztnQkFDaEMsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPO29CQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3JELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBR0QsY0FBYyxDQUFDLEtBQVksRUFBRSxLQUFLO1FBQ2pDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDVCxDQUFDOzs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTztTQUNQO1FBRUQsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8scUJBQXFCLENBQUM7WUFDOUIsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbkIsT0FBTyxvQkFBb0IsQ0FBQztZQUM3QixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLGtCQUFrQixDQUFDO1lBQzNCLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8scUJBQXFCLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7Ozs7SUFHRCxZQUFZLENBQUMsS0FBWTtRQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTztTQUNQO1FBQ0QsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8sZ0JBQWdCLENBQUM7WUFDekIsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbkIsT0FBTyxrQkFBa0IsQ0FBQztZQUMzQixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLHVCQUF1QixDQUFDO1lBQ2hDLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7O1lBOUVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsc3dCQUEwQzs7YUFFMUM7Ozs7WUFSZSxnQkFBZ0I7Ozs7SUFZL0IsMENBQTJCOztJQUMzQixxQ0FBNkI7Ozs7O0lBRWpCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0LCBDcGx4QWxlcnRTZXJ2aWNlLCBBbGVydFR5cGUgfSBmcm9tICcuL2NwbHgtYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndXRpbCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjcGx4LWFsZXJ0JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vY3BseC1hbGVydC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vY3BseC1hbGVydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcGx4QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuXHRzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRhbGVydGFzID0gbmV3IEFycmF5PEFsZXJ0PigpO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbXM6IENwbHhBbGVydFNlcnZpY2UpIHtcclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fc21zLmdldEFsZXJ0YXMoKS5zdWJzY3JpYmUoKGFsZXJ0OiBBbGVydCkgPT4ge1xyXG5cdFx0XHRpZiAoYWxlcnQgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKGFsZXJ0Lm1lbnNhamUpKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnZhbGlkYXRlX21lbnNhamUoYWxlcnQpKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFsZXJ0YXMucHVzaChhbGVydCk7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly90aGlzLnJlbW92ZXJNZW5zYWplKGFsZXJ0LCB0aGlzLmFsZXJ0YXMuaW5kZXhPZihhbGVydCkpO1xyXG5cdFx0XHRcdFx0fSwgNTAwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYgKCFpc051bGxPclVuZGVmaW5lZCh0aGlzLnN1YnNjcmlwdGlvbikpXHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZV9tZW5zYWplKG1lbnNhamU6IEFsZXJ0KSB7XHJcblx0XHRpZiAodGhpcy5hbGVydGFzLmxlbmd0aClcclxuXHRcdFx0Zm9yIChjb25zdCBhbGVydGEgb2YgdGhpcy5hbGVydGFzKVxyXG5cdFx0XHRcdGlmIChhbGVydGEubWVuc2FqZSA9PSBtZW5zYWplLm1lbnNhamUpIHJldHVybiB0cnVlO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbW92ZXJNZW5zYWplKGFsZXJ0OiBBbGVydCwgaW5kZXgpIHtcclxuXHRcdGFsZXJ0LmNsYXNzID0gJ25zLWhpZGUnO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuYWxlcnRhcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0fSwgMjMwKTtcclxuXHR9XHJcblxyXG5cdC8vW25nQ2xhc3NdPVwieydhbGVydC1zdWNjZXNzIHRleHQtc3VjY2Vzcyc6IG0udGlwbyA9PSAxICwnYWxlcnQtZGFuZ2VyIHRleHQtZGFuZ2VyJzptLnRpcG8gPT0gMiAsJ2FsZXJ0LXdhcm5pbmcgdGV4dC13YXJuaW5nJzptLnRpcG8gPT0gMyAsJ2FsZXJ0LXByaW1hcnkgdGV4dC1wcmltYXJ5JzptLnRpcG8gPT0gNH1cIlxyXG5cdGNzc0NsYXNzKGFsZXJ0OiBBbGVydCkge1xyXG5cdFx0aWYgKCFhbGVydCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoIChhbGVydC50aXBvKSB7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLlN1Y2Nlc3M6XHJcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC1zdWNjZXNzJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuRXJyb3I6XHJcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC1kYW5nZXInO1xyXG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5JbmZvOlxyXG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtaW5mbyc7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLldhcm5pbmc6XHJcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC13YXJuaW5nJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vW25nQ2xhc3NdPVwieydmYS10aHVtYnMtby11cCc6IG0udGlwbyA9PSAxICwnZmEtdGh1bWJzLW8tZG93bic6bS50aXBvID09IDIgLCdmYS1leGNsYW1hdGlvbi1jaXJjbGUnOm0udGlwbyA9PSAzICwnZmEtYnVsbHNleWUnOm0udGlwbyA9PSA0fVwiXHJcblx0Y3NzQ2xhc3NJY29uKGFsZXJ0OiBBbGVydCkge1xyXG5cdFx0aWYgKCFhbGVydCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzd2l0Y2ggKGFsZXJ0LnRpcG8pIHtcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuU3VjY2VzczpcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhLXRodW1icy1vLXVwJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuRXJyb3I6XHJcblx0XHRcdFx0cmV0dXJuICdmYS10aHVtYnMtby1kb3duJztcclxuXHRcdFx0Y2FzZSBBbGVydFR5cGUuSW5mbzpcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhLWV4Y2xhbWF0aW9uLWNpcmNsZSc7XHJcblx0XHRcdGNhc2UgQWxlcnRUeXBlLldhcm5pbmc6XHJcblx0XHRcdFx0cmV0dXJuICdmYS1idWxsc2V5ZSc7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==