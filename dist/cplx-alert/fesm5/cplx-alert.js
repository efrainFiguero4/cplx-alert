import { Injectable, NgModule, Component, defineInjectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationStart, RouterModule } from '@angular/router';
import { __values } from 'tslib';
import { isNullOrUndefined } from 'util';
import { CommonModule } from '@angular/common';

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
        this.alerta = new Subject();
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CplxAlertService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ CplxAlertService.ngInjectableDef = defineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(inject(Router)); }, token: CplxAlertService, providedIn: "root" });
    return CplxAlertService;
}());

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
                    styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;min-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.fa-times-circle:before{font-family:monospace;content:\"x\"}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
                }] }
    ];
    /** @nocollapse */
    CplxAlertComponent.ctorParameters = function () { return [
        { type: CplxAlertService }
    ]; };
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
            providers: [CplxAlertService, RouterModule]
        };
    };
    CplxAlertModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule],
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

export { AlertType, CplxAlertService, CplxAlertModule, CplxAlertComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY3BseC1hbGVydC9saWIvY3BseC1hbGVydC5zZXJ2aWNlLnRzIiwibmc6Ly9jcGx4LWFsZXJ0L2xpYi9jcGx4LWFsZXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vY3BseC1hbGVydC9saWIvY3BseC1hbGVydC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnQge1xuXHRtZW5zYWplPzogc3RyaW5nO1xuXHR0aXBvPzogQWxlcnRUeXBlO1xuXHRjbGFzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gQWxlcnRUeXBlIHtcblx0Tm9uZSxcblx0U3VjY2Vzcyxcblx0RXJyb3IsXG5cdFdhcm5pbmcsXG5cdEluZm9cbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDcGx4QWxlcnRTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJvdXRlcmNoYW5nZSA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuXHRcdFx0XHRpZiAodGhpcy5yb3V0ZXJjaGFuZ2UpIHtcblx0XHRcdFx0XHR0aGlzLnJvdXRlcmNoYW5nZSA9IGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY2xlYXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhbGVydGEgPSBuZXcgU3ViamVjdDxBbGVydD4oKTtcblxuXHRhZGQobWVuc2FqZTogQWxlcnQpIHtcblx0XHRtZW5zYWplLmNsYXNzID0gXCJucy1zaG93XCJcblx0XHR0aGlzLmFsZXJ0YS5uZXh0KG1lbnNhamUpO1xuXHR9O1xuXG5cdGdldEFsZXJ0YXMoKTogT2JzZXJ2YWJsZTxBbGVydD4ge1xuXHRcdHJldHVybiB0aGlzLmFsZXJ0YS5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuYWxlcnRhLm5leHQoKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnQsIENwbHhBbGVydFNlcnZpY2UsIEFsZXJ0VHlwZSB9IGZyb20gJy4vY3BseC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY3BseC1hbGVydCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImFsZXJ0YS1tZW5zYWplXCI+XG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBtIG9mIGFsZXJ0YXM7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cInt7Y3NzQ2xhc3MobSl9fSBucy1ncm93bCBucy1ib3ggbnMtZWZmZWN0LXNjYWxlIHt7bS5jbGFzc319XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzbXMtYm94LWlubmVyXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJwLTAgbS0wXCI+e3ttLm1lbnNhamV9fS48L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZSBmYS1sZyBjbG9zZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXJcIiAoY2xpY2spPVwicmVtb3Zlck1lbnNhamUobSxpKVwiPjwvaT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICBgLFxuXHRzdHlsZVVybHM6IFsnLi9jcGx4LWFsZXJ0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENwbHhBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0c3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cdGFsZXJ0YXMgPSBuZXcgQXJyYXk8QWxlcnQ+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc21zOiBDcGx4QWxlcnRTZXJ2aWNlKSB7XG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9zbXMuZ2V0QWxlcnRhcygpLnN1YnNjcmliZSgoYWxlcnQ6IEFsZXJ0KSA9PiB7XG5cdFx0XHRpZiAoYWxlcnQgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKGFsZXJ0Lm1lbnNhamUpKSB7XG5cdFx0XHRcdGlmICghdGhpcy52YWxpZGF0ZV9tZW5zYWplKGFsZXJ0KSkge1xuXHRcdFx0XHRcdHRoaXMuYWxlcnRhcy5wdXNoKGFsZXJ0KTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucmVtb3Zlck1lbnNhamUoYWxlcnQsIHRoaXMuYWxlcnRhcy5pbmRleE9mKGFsZXJ0KSk7XG5cdFx0XHRcdFx0fSwgNTAwMClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuc3Vic2NyaXB0aW9uKSlcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHR2YWxpZGF0ZV9tZW5zYWplKG1lbnNhamU6IEFsZXJ0KSB7XG5cdFx0aWYgKHRoaXMuYWxlcnRhcy5sZW5ndGgpXG5cdFx0XHRmb3IgKGNvbnN0IGFsZXJ0YSBvZiB0aGlzLmFsZXJ0YXMpXG5cdFx0XHRcdGlmIChhbGVydGEubWVuc2FqZSA9PSBtZW5zYWplLm1lbnNhamUpIHJldHVybiB0cnVlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cblx0cmVtb3Zlck1lbnNhamUoYWxlcnQ6IEFsZXJ0LCBpbmRleCkge1xuXHRcdGFsZXJ0LmNsYXNzID0gJ25zLWhpZGUnO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5hbGVydGFzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fSwgMjMwKTtcblx0fVxuXG5cdC8vW25nQ2xhc3NdPVwieydhbGVydC1zdWNjZXNzIHRleHQtc3VjY2Vzcyc6IG0udGlwbyA9PSAxICwnYWxlcnQtZGFuZ2VyIHRleHQtZGFuZ2VyJzptLnRpcG8gPT0gMiAsJ2FsZXJ0LXdhcm5pbmcgdGV4dC13YXJuaW5nJzptLnRpcG8gPT0gMyAsJ2FsZXJ0LXByaW1hcnkgdGV4dC1wcmltYXJ5JzptLnRpcG8gPT0gNH1cIlxuXHRjc3NDbGFzcyhhbGVydDogQWxlcnQpIHtcblx0XHRpZiAoIWFsZXJ0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChhbGVydC50aXBvKSB7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5TdWNjZXNzOlxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnO1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuRXJyb3I6XG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtZGFuZ2VyJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkluZm86XG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtaW5mbyc7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LXdhcm5pbmcnO1xuXHRcdH1cblx0fVxuXG5cdC8vW25nQ2xhc3NdPVwieydmYS10aHVtYnMtby11cCc6IG0udGlwbyA9PSAxICwnZmEtdGh1bWJzLW8tZG93bic6bS50aXBvID09IDIgLCdmYS1leGNsYW1hdGlvbi1jaXJjbGUnOm0udGlwbyA9PSAzICwnZmEtYnVsbHNleWUnOm0udGlwbyA9PSA0fVwiXG5cdGNzc0NsYXNzSWNvbihhbGVydDogQWxlcnQpIHtcblx0XHRpZiAoIWFsZXJ0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHN3aXRjaCAoYWxlcnQudGlwbykge1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuU3VjY2Vzczpcblx0XHRcdFx0cmV0dXJuICdmYS10aHVtYnMtby11cCc7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5FcnJvcjpcblx0XHRcdFx0cmV0dXJuICdmYS10aHVtYnMtby1kb3duJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkluZm86XG5cdFx0XHRcdHJldHVybiAnZmEtZXhjbGFtYXRpb24tY2lyY2xlJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLldhcm5pbmc6XG5cdFx0XHRcdHJldHVybiAnZmEtYnVsbHNleWUnO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENwbHhBbGVydENvbXBvbmVudCB9IGZyb20gJy4vY3BseC1hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3BseEFsZXJ0U2VydmljZSB9IGZyb20gJy4vY3BseC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcblx0ZGVjbGFyYXRpb25zOiBbQ3BseEFsZXJ0Q29tcG9uZW50XSxcblx0ZXhwb3J0czogW0NwbHhBbGVydENvbXBvbmVudF0sXG5cdHByb3ZpZGVyczogW0NwbHhBbGVydFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQ3BseEFsZXJ0TW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDcGx4QWxlcnRNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtDcGx4QWxlcnRTZXJ2aWNlLCBSb3V0ZXJNb2R1bGVdXG5cdFx0fTtcblx0fVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBWUMsT0FBSTtJQUNKLFVBQU87SUFDUCxRQUFLO0lBQ0wsVUFBTztJQUNQLE9BQUk7O29CQUpKLElBQUk7b0JBQ0osT0FBTztvQkFDUCxLQUFLO29CQUNMLE9BQU87b0JBQ1AsSUFBSTs7SUFXSiwwQkFBb0IsTUFBYztRQUFsQyxpQkFVQztRQVZtQixXQUFNLEdBQU4sTUFBTSxDQUFROzRCQUZYLEtBQUs7c0JBY1gsSUFBSSxPQUFPLEVBQVM7UUFYcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNqQyxJQUFJLEtBQUssWUFBWSxlQUFlLEVBQUU7Z0JBQ3JDLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtvQkFDdEIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7aUJBQzFCO3FCQUFNO29CQUNOLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDYjthQUNEO1NBQ0QsQ0FBQyxDQUFDO0tBQ0g7Ozs7O0lBSUQsOEJBQUc7Ozs7SUFBSCxVQUFJLE9BQWM7UUFDakIsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7Ozs7SUFF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