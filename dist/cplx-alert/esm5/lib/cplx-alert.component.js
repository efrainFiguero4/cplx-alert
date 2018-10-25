/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.subscription = this._sms.getAlertas().subscribe(function (alert) {
            if (alert && !isNullOrUndefined(alert.mensaje)) {
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
        { type: Component, args: [{
                    selector: 'cplx-alert',
                    template: "\n\t\t<div class=\"alerta-mensaje\">\n\t\t\t<div *ngFor=\"let m of alertas; let i = index\" class=\"{{cssClass(m)}} ns-growl ns-box ns-effect-scale {{m.class}}\">\n\t\t\t\t<div class=\"sms-box-inner\">\n\t\t\t\t\t<p class=\"p-0 m-0\">{{m.mensaje}}.</p>\n\t\t\t\t</div>\n\t\t\t\t<i class=\"fa fa-times-circle fa-lg close\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"removerMensaje(m,i)\"></i>\n\t\t\t</div>\n\t\t</div>\n  ",
                    styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.fa-times-circle:before{font-family:monospace;content:\"x\"}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
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
    /** @type {?} */
    CplxAlertComponent.prototype._sms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jcGx4LWFsZXJ0LyIsInNvdXJjZXMiOlsibGliL2NwbHgtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFTLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUF1QnhDLDRCQUFvQixJQUFzQjtRQUExQyxpQkFXQztRQVhtQixTQUFJLEdBQUosSUFBSSxDQUFrQjt1QkFGaEMsSUFBSSxLQUFLLEVBQVM7UUFHM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVk7WUFDakUsSUFBSSxLQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2xDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QixVQUFVLENBQUM7d0JBQ1YsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDeEQsRUFBRSxJQUFJLENBQUMsQ0FBQTtpQkFDUjthQUNEO1NBQ0QsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFHRCx3Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ2pDOzs7OztJQUVELDZDQUFnQjs7OztJQUFoQixVQUFpQixPQUFjOztRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7Z0JBQ3RCLEtBQXFCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFBLGdCQUFBO29CQUE1QixJQUFNLE1BQU0sV0FBQTtvQkFDaEIsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPO3dCQUFFLE9BQU8sSUFBSSxDQUFDO2lCQUFBOzs7Ozs7OzthQUFBO1FBQ3JELE9BQU8sS0FBSyxDQUFDO0tBQ2I7Ozs7OztJQUdELDJDQUFjOzs7OztJQUFkLFVBQWUsS0FBWSxFQUFFLEtBQUs7UUFBbEMsaUJBS0M7UUFKQSxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN4QixVQUFVLENBQUM7WUFDVixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUIsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNSO0lBRUQscUxBQXFMOzs7OztJQUNyTCxxQ0FBUTs7OztJQUFSLFVBQVMsS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTztTQUNQO1FBRUQsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8scUJBQXFCLENBQUM7WUFDOUIsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbkIsT0FBTyxvQkFBb0IsQ0FBQztZQUM3QixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLGtCQUFrQixDQUFDO1lBQzNCLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8scUJBQXFCLENBQUM7U0FDOUI7S0FDRDtJQUVELDZJQUE2STs7Ozs7SUFDN0kseUNBQVk7Ozs7SUFBWixVQUFhLEtBQVk7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU87U0FDUDtRQUNELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLGdCQUFnQixDQUFDO1lBQ3pCLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ25CLE9BQU8sa0JBQWtCLENBQUM7WUFDM0IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDbEIsT0FBTyx1QkFBdUIsQ0FBQztZQUNoQyxLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLGFBQWEsQ0FBQztTQUN0QjtLQUNEOztnQkF2RkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsb2JBU1I7O2lCQUVGOzs7O2dCQWpCZSxnQkFBZ0I7OzZCQURoQzs7U0FvQmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnQsIENwbHhBbGVydFNlcnZpY2UsIEFsZXJ0VHlwZSB9IGZyb20gJy4vY3BseC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY3BseC1hbGVydCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImFsZXJ0YS1tZW5zYWplXCI+XG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBtIG9mIGFsZXJ0YXM7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cInt7Y3NzQ2xhc3MobSl9fSBucy1ncm93bCBucy1ib3ggbnMtZWZmZWN0LXNjYWxlIHt7bS5jbGFzc319XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzbXMtYm94LWlubmVyXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJwLTAgbS0wXCI+e3ttLm1lbnNhamV9fS48L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZSBmYS1sZyBjbG9zZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXJcIiAoY2xpY2spPVwicmVtb3Zlck1lbnNhamUobSxpKVwiPjwvaT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICBgLFxuXHRzdHlsZVVybHM6IFsnLi9jcGx4LWFsZXJ0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENwbHhBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0c3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cdGFsZXJ0YXMgPSBuZXcgQXJyYXk8QWxlcnQ+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc21zOiBDcGx4QWxlcnRTZXJ2aWNlKSB7XG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9zbXMuZ2V0QWxlcnRhcygpLnN1YnNjcmliZSgoYWxlcnQ6IEFsZXJ0KSA9PiB7XG5cdFx0XHRpZiAoYWxlcnQgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKGFsZXJ0Lm1lbnNhamUpKSB7XG5cdFx0XHRcdGlmICghdGhpcy52YWxpZGF0ZV9tZW5zYWplKGFsZXJ0KSkge1xuXHRcdFx0XHRcdHRoaXMuYWxlcnRhcy5wdXNoKGFsZXJ0KTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucmVtb3Zlck1lbnNhamUoYWxlcnQsIHRoaXMuYWxlcnRhcy5pbmRleE9mKGFsZXJ0KSk7XG5cdFx0XHRcdFx0fSwgNTAwMClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuc3Vic2NyaXB0aW9uKSlcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHR2YWxpZGF0ZV9tZW5zYWplKG1lbnNhamU6IEFsZXJ0KSB7XG5cdFx0aWYgKHRoaXMuYWxlcnRhcy5sZW5ndGgpXG5cdFx0XHRmb3IgKGNvbnN0IGFsZXJ0YSBvZiB0aGlzLmFsZXJ0YXMpXG5cdFx0XHRcdGlmIChhbGVydGEubWVuc2FqZSA9PSBtZW5zYWplLm1lbnNhamUpIHJldHVybiB0cnVlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cblx0cmVtb3Zlck1lbnNhamUoYWxlcnQ6IEFsZXJ0LCBpbmRleCkge1xuXHRcdGFsZXJ0LmNsYXNzID0gJ25zLWhpZGUnO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5hbGVydGFzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fSwgMjMwKTtcblx0fVxuXG5cdC8vW25nQ2xhc3NdPVwieydhbGVydC1zdWNjZXNzIHRleHQtc3VjY2Vzcyc6IG0udGlwbyA9PSAxICwnYWxlcnQtZGFuZ2VyIHRleHQtZGFuZ2VyJzptLnRpcG8gPT0gMiAsJ2FsZXJ0LXdhcm5pbmcgdGV4dC13YXJuaW5nJzptLnRpcG8gPT0gMyAsJ2FsZXJ0LXByaW1hcnkgdGV4dC1wcmltYXJ5JzptLnRpcG8gPT0gNH1cIlxuXHRjc3NDbGFzcyhhbGVydDogQWxlcnQpIHtcblx0XHRpZiAoIWFsZXJ0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChhbGVydC50aXBvKSB7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5TdWNjZXNzOlxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnO1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuRXJyb3I6XG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtZGFuZ2VyJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkluZm86XG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtaW5mbyc7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LXdhcm5pbmcnO1xuXHRcdH1cblx0fVxuXG5cdC8vW25nQ2xhc3NdPVwieydmYS10aHVtYnMtby11cCc6IG0udGlwbyA9PSAxICwnZmEtdGh1bWJzLW8tZG93bic6bS50aXBvID09IDIgLCdmYS1leGNsYW1hdGlvbi1jaXJjbGUnOm0udGlwbyA9PSAzICwnZmEtYnVsbHNleWUnOm0udGlwbyA9PSA0fVwiXG5cdGNzc0NsYXNzSWNvbihhbGVydDogQWxlcnQpIHtcblx0XHRpZiAoIWFsZXJ0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHN3aXRjaCAoYWxlcnQudGlwbykge1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuU3VjY2Vzczpcblx0XHRcdFx0cmV0dXJuICdmYS10aHVtYnMtby11cCc7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5FcnJvcjpcblx0XHRcdFx0cmV0dXJuICdmYS10aHVtYnMtby1kb3duJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkluZm86XG5cdFx0XHRcdHJldHVybiAnZmEtZXhjbGFtYXRpb24tY2lyY2xlJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLldhcm5pbmc6XG5cdFx0XHRcdHJldHVybiAnZmEtYnVsbHNleWUnO1xuXHRcdH1cblx0fVxufVxuIl19