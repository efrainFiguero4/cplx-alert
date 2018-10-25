/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.subscription = this._sms.getAlertas().subscribe((alert) => {
            if (alert && !isNullOrUndefined(alert.mensaje)) {
                if (!this.validate_mensaje(alert)) {
                    this.alertas.push(alert);
                    setTimeout(() => {
                        this.removerMensaje(alert, this.alertas.indexOf(alert));
                    }, 5000);
                }
            }
        });
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
        setTimeout(() => {
            this.alertas.splice(index, 1);
        }, 230);
    }
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
                template: `
		<div class="alerta-mensaje">
			<div *ngFor="let m of alertas; let i = index" class="{{cssClass(m)}} ns-growl ns-box ns-effect-scale {{m.class}}">
				<div class="sms-box-inner">
					<p class="p-0 m-0">{{m.mensaje}}.</p>
				</div>
				<i class="fa fa-times-circle fa-lg close" aria-hidden="true" style="cursor:pointer" (click)="removerMensaje(m,i)"></i>
			</div>
		</div>
  `,
                styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.fa-times-circle:before{font-family:monospace;content:\"x\"}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
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
    /** @type {?} */
    CplxAlertComponent.prototype._sms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQVMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBa0J6QyxNQUFNOzs7O0lBS0wsWUFBb0IsSUFBc0I7UUFBdEIsU0FBSSxHQUFKLElBQUksQ0FBa0I7dUJBRmhDLElBQUksS0FBSyxFQUFTO1FBRzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUNyRSxJQUFJLEtBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDeEQsRUFBRSxJQUFJLENBQUMsQ0FBQTtpQkFDUjthQUNEO1NBQ0QsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFHRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNqQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFjO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU87Z0JBQ2hDLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTztvQkFBRSxPQUFPLElBQUksQ0FBQztRQUNyRCxPQUFPLEtBQUssQ0FBQztLQUNiOzs7Ozs7SUFHRCxjQUFjLENBQUMsS0FBWSxFQUFFLEtBQUs7UUFDakMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDeEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1I7Ozs7O0lBR0QsUUFBUSxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU87U0FDUDtRQUVELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLHFCQUFxQixDQUFDO1lBQzlCLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ25CLE9BQU8sb0JBQW9CLENBQUM7WUFDN0IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDbEIsT0FBTyxrQkFBa0IsQ0FBQztZQUMzQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLHFCQUFxQixDQUFDO1NBQzlCO0tBQ0Q7Ozs7O0lBR0QsWUFBWSxDQUFDLEtBQVk7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU87U0FDUDtRQUNELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLGdCQUFnQixDQUFDO1lBQ3pCLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ25CLE9BQU8sa0JBQWtCLENBQUM7WUFDM0IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDbEIsT0FBTyx1QkFBdUIsQ0FBQztZQUNoQyxLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLGFBQWEsQ0FBQztTQUN0QjtLQUNEOzs7WUF2RkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNSOzthQUVGOzs7O1lBakJlLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0LCBDcGx4QWxlcnRTZXJ2aWNlLCBBbGVydFR5cGUgfSBmcm9tICcuL2NwbHgtYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NwbHgtYWxlcnQnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJhbGVydGEtbWVuc2FqZVwiPlxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgbSBvZiBhbGVydGFzOyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJ7e2Nzc0NsYXNzKG0pfX0gbnMtZ3Jvd2wgbnMtYm94IG5zLWVmZmVjdC1zY2FsZSB7e20uY2xhc3N9fVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic21zLWJveC1pbm5lclwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzPVwicC0wIG0tMFwiPnt7bS5tZW5zYWplfX0uPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGUgZmEtbGcgY2xvc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyXCIgKGNsaWNrKT1cInJlbW92ZXJNZW5zYWplKG0saSlcIj48L2k+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgYCxcblx0c3R5bGVVcmxzOiBbJy4vY3BseC1hbGVydC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDcGx4QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRhbGVydGFzID0gbmV3IEFycmF5PEFsZXJ0PigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3NtczogQ3BseEFsZXJ0U2VydmljZSkge1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fc21zLmdldEFsZXJ0YXMoKS5zdWJzY3JpYmUoKGFsZXJ0OiBBbGVydCkgPT4ge1xuXHRcdFx0aWYgKGFsZXJ0ICYmICFpc051bGxPclVuZGVmaW5lZChhbGVydC5tZW5zYWplKSkge1xuXHRcdFx0XHRpZiAoIXRoaXMudmFsaWRhdGVfbWVuc2FqZShhbGVydCkpIHtcblx0XHRcdFx0XHR0aGlzLmFsZXJ0YXMucHVzaChhbGVydCk7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbW92ZXJNZW5zYWplKGFsZXJ0LCB0aGlzLmFsZXJ0YXMuaW5kZXhPZihhbGVydCkpO1xuXHRcdFx0XHRcdH0sIDUwMDApXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKCFpc051bGxPclVuZGVmaW5lZCh0aGlzLnN1YnNjcmlwdGlvbikpXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0dmFsaWRhdGVfbWVuc2FqZShtZW5zYWplOiBBbGVydCkge1xuXHRcdGlmICh0aGlzLmFsZXJ0YXMubGVuZ3RoKVxuXHRcdFx0Zm9yIChjb25zdCBhbGVydGEgb2YgdGhpcy5hbGVydGFzKVxuXHRcdFx0XHRpZiAoYWxlcnRhLm1lbnNhamUgPT0gbWVuc2FqZS5tZW5zYWplKSByZXR1cm4gdHJ1ZTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXG5cdHJlbW92ZXJNZW5zYWplKGFsZXJ0OiBBbGVydCwgaW5kZXgpIHtcblx0XHRhbGVydC5jbGFzcyA9ICducy1oaWRlJztcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuYWxlcnRhcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH0sIDIzMCk7XG5cdH1cblxuXHQvL1tuZ0NsYXNzXT1cInsnYWxlcnQtc3VjY2VzcyB0ZXh0LXN1Y2Nlc3MnOiBtLnRpcG8gPT0gMSAsJ2FsZXJ0LWRhbmdlciB0ZXh0LWRhbmdlcic6bS50aXBvID09IDIgLCdhbGVydC13YXJuaW5nIHRleHQtd2FybmluZyc6bS50aXBvID09IDMgLCdhbGVydC1wcmltYXJ5IHRleHQtcHJpbWFyeSc6bS50aXBvID09IDR9XCJcblx0Y3NzQ2xhc3MoYWxlcnQ6IEFsZXJ0KSB7XG5cdFx0aWYgKCFhbGVydCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoYWxlcnQudGlwbykge1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuU3VjY2Vzczpcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC1zdWNjZXNzJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkVycm9yOlxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LWRhbmdlcic7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5JbmZvOlxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LWluZm8nO1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuV2FybmluZzpcblx0XHRcdFx0cmV0dXJuICdhbGVydCBhbGVydC13YXJuaW5nJztcblx0XHR9XG5cdH1cblxuXHQvL1tuZ0NsYXNzXT1cInsnZmEtdGh1bWJzLW8tdXAnOiBtLnRpcG8gPT0gMSAsJ2ZhLXRodW1icy1vLWRvd24nOm0udGlwbyA9PSAyICwnZmEtZXhjbGFtYXRpb24tY2lyY2xlJzptLnRpcG8gPT0gMyAsJ2ZhLWJ1bGxzZXllJzptLnRpcG8gPT0gNH1cIlxuXHRjc3NDbGFzc0ljb24oYWxlcnQ6IEFsZXJ0KSB7XG5cdFx0aWYgKCFhbGVydCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzd2l0Y2ggKGFsZXJ0LnRpcG8pIHtcblx0XHRcdGNhc2UgQWxlcnRUeXBlLlN1Y2Nlc3M6XG5cdFx0XHRcdHJldHVybiAnZmEtdGh1bWJzLW8tdXAnO1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuRXJyb3I6XG5cdFx0XHRcdHJldHVybiAnZmEtdGh1bWJzLW8tZG93bic7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5JbmZvOlxuXHRcdFx0XHRyZXR1cm4gJ2ZhLWV4Y2xhbWF0aW9uLWNpcmNsZSc7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxuXHRcdFx0XHRyZXR1cm4gJ2ZhLWJ1bGxzZXllJztcblx0XHR9XG5cdH1cbn1cbiJdfQ==