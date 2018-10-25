import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationStart, RouterModule } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const AlertType = {
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
class CplxAlertService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.routerchange = false;
        this.alerta = new Subject();
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.routerchange) {
                    this.routerchange = false;
                }
                else {
                    this.clear();
                }
            }
        });
    }
    /**
     * @param {?} mensaje
     * @return {?}
     */
    add(mensaje) {
        mensaje.class = "ns-show";
        this.alerta.next(mensaje);
    }
    ;
    /**
     * @return {?}
     */
    getAlertas() {
        return this.alerta.asObservable();
    }
    /**
     * @return {?}
     */
    clear() {
        this.alerta.next();
    }
}
CplxAlertService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CplxAlertService.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ CplxAlertService.ngInjectableDef = defineInjectable({ factory: function CplxAlertService_Factory() { return new CplxAlertService(inject(Router)); }, token: CplxAlertService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CplxAlertComponent {
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
                styles: [".alerta-mensaje{position:fixed;top:40px;right:10px;z-index:1050;overflow:hidden;outline:0}.ns-effect-scale.ns-show{-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s}.ns-effect-scale.ns-hide{-webkit-animation-name:animateOut;animation-name:animateOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-direction:reverse;animation-direction:reverse}.ns-effect-scale{box-shadow:0 25px 10px -15px rgba(0,0,0,.05)}.ns-growl{max-width:300px;min-width:300px;border-radius:5px}.ns-box{line-height:1.4;z-index:1000;font-size:90%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif}.fa-times-circle:before{font-family:monospace;content:\"x\"}.close{width:20px!important;height:20px!important;position:absolute!important;right:4px!important;top:4px!important;cursor:pointer!important;-webkit-backface-visibility:hidden!important;backface-visibility:hidden!important}@-webkit-keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateIn{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animateOut{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}"]
            }] }
];
/** @nocollapse */
CplxAlertComponent.ctorParameters = () => [
    { type: CplxAlertService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CplxAlertModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CplxAlertModule,
            providers: [CplxAlertService, RouterModule]
        };
    }
}
CplxAlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                declarations: [CplxAlertComponent],
                exports: [CplxAlertComponent],
                providers: [CplxAlertService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { AlertType, CplxAlertService, CplxAlertModule, CplxAlertComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY3BseC1hbGVydC9saWIvY3BseC1hbGVydC5zZXJ2aWNlLnRzIiwibmc6Ly9jcGx4LWFsZXJ0L2xpYi9jcGx4LWFsZXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vY3BseC1hbGVydC9saWIvY3BseC1hbGVydC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnQge1xuXHRtZW5zYWplPzogc3RyaW5nO1xuXHR0aXBvPzogQWxlcnRUeXBlO1xuXHRjbGFzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gQWxlcnRUeXBlIHtcblx0Tm9uZSxcblx0U3VjY2Vzcyxcblx0RXJyb3IsXG5cdFdhcm5pbmcsXG5cdEluZm9cbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDcGx4QWxlcnRTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJvdXRlcmNoYW5nZSA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuXHRcdFx0XHRpZiAodGhpcy5yb3V0ZXJjaGFuZ2UpIHtcblx0XHRcdFx0XHR0aGlzLnJvdXRlcmNoYW5nZSA9IGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY2xlYXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhbGVydGEgPSBuZXcgU3ViamVjdDxBbGVydD4oKTtcblxuXHRhZGQobWVuc2FqZTogQWxlcnQpIHtcblx0XHRtZW5zYWplLmNsYXNzID0gXCJucy1zaG93XCJcblx0XHR0aGlzLmFsZXJ0YS5uZXh0KG1lbnNhamUpO1xuXHR9O1xuXG5cdGdldEFsZXJ0YXMoKTogT2JzZXJ2YWJsZTxBbGVydD4ge1xuXHRcdHJldHVybiB0aGlzLmFsZXJ0YS5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuYWxlcnRhLm5leHQoKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnQsIENwbHhBbGVydFNlcnZpY2UsIEFsZXJ0VHlwZSB9IGZyb20gJy4vY3BseC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY3BseC1hbGVydCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImFsZXJ0YS1tZW5zYWplXCI+XG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBtIG9mIGFsZXJ0YXM7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cInt7Y3NzQ2xhc3MobSl9fSBucy1ncm93bCBucy1ib3ggbnMtZWZmZWN0LXNjYWxlIHt7bS5jbGFzc319XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzbXMtYm94LWlubmVyXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3M9XCJwLTAgbS0wXCI+e3ttLm1lbnNhamV9fS48L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZSBmYS1sZyBjbG9zZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXJcIiAoY2xpY2spPVwicmVtb3Zlck1lbnNhamUobSxpKVwiPjwvaT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICBgLFxuXHRzdHlsZVVybHM6IFsnLi9jcGx4LWFsZXJ0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENwbHhBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0c3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cdGFsZXJ0YXMgPSBuZXcgQXJyYXk8QWxlcnQ+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc21zOiBDcGx4QWxlcnRTZXJ2aWNlKSB7XG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9zbXMuZ2V0QWxlcnRhcygpLnN1YnNjcmliZSgoYWxlcnQ6IEFsZXJ0KSA9PiB7XG5cdFx0XHRpZiAoYWxlcnQgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKGFsZXJ0Lm1lbnNhamUpKSB7XG5cdFx0XHRcdGlmICghdGhpcy52YWxpZGF0ZV9tZW5zYWplKGFsZXJ0KSkge1xuXHRcdFx0XHRcdHRoaXMuYWxlcnRhcy5wdXNoKGFsZXJ0KTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucmVtb3Zlck1lbnNhamUoYWxlcnQsIHRoaXMuYWxlcnRhcy5pbmRleE9mKGFsZXJ0KSk7XG5cdFx0XHRcdFx0fSwgNTAwMClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuc3Vic2NyaXB0aW9uKSlcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHR2YWxpZGF0ZV9tZW5zYWplKG1lbnNhamU6IEFsZXJ0KSB7XG5cdFx0aWYgKHRoaXMuYWxlcnRhcy5sZW5ndGgpXG5cdFx0XHRmb3IgKGNvbnN0IGFsZXJ0YSBvZiB0aGlzLmFsZXJ0YXMpXG5cdFx0XHRcdGlmIChhbGVydGEubWVuc2FqZSA9PSBtZW5zYWplLm1lbnNhamUpIHJldHVybiB0cnVlO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cblx0cmVtb3Zlck1lbnNhamUoYWxlcnQ6IEFsZXJ0LCBpbmRleCkge1xuXHRcdGFsZXJ0LmNsYXNzID0gJ25zLWhpZGUnO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5hbGVydGFzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fSwgMjMwKTtcblx0fVxuXG5cdC8vW25nQ2xhc3NdPVwieydhbGVydC1zdWNjZXNzIHRleHQtc3VjY2Vzcyc6IG0udGlwbyA9PSAxICwnYWxlcnQtZGFuZ2VyIHRleHQtZGFuZ2VyJzptLnRpcG8gPT0gMiAsJ2FsZXJ0LXdhcm5pbmcgdGV4dC13YXJuaW5nJzptLnRpcG8gPT0gMyAsJ2FsZXJ0LXByaW1hcnkgdGV4dC1wcmltYXJ5JzptLnRpcG8gPT0gNH1cIlxuXHRjc3NDbGFzcyhhbGVydDogQWxlcnQpIHtcblx0XHRpZiAoIWFsZXJ0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChhbGVydC50aXBvKSB7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5TdWNjZXNzOlxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnO1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuRXJyb3I6XG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtZGFuZ2VyJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkluZm86XG5cdFx0XHRcdHJldHVybiAnYWxlcnQgYWxlcnQtaW5mbyc7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxuXHRcdFx0XHRyZXR1cm4gJ2FsZXJ0IGFsZXJ0LXdhcm5pbmcnO1xuXHRcdH1cblx0fVxuXG5cdC8vW25nQ2xhc3NdPVwieydmYS10aHVtYnMtby11cCc6IG0udGlwbyA9PSAxICwnZmEtdGh1bWJzLW8tZG93bic6bS50aXBvID09IDIgLCdmYS1leGNsYW1hdGlvbi1jaXJjbGUnOm0udGlwbyA9PSAzICwnZmEtYnVsbHNleWUnOm0udGlwbyA9PSA0fVwiXG5cdGNzc0NsYXNzSWNvbihhbGVydDogQWxlcnQpIHtcblx0XHRpZiAoIWFsZXJ0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHN3aXRjaCAoYWxlcnQudGlwbykge1xuXHRcdFx0Y2FzZSBBbGVydFR5cGUuU3VjY2Vzczpcblx0XHRcdFx0cmV0dXJuICdmYS10aHVtYnMtby11cCc7XG5cdFx0XHRjYXNlIEFsZXJ0VHlwZS5FcnJvcjpcblx0XHRcdFx0cmV0dXJuICdmYS10aHVtYnMtby1kb3duJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLkluZm86XG5cdFx0XHRcdHJldHVybiAnZmEtZXhjbGFtYXRpb24tY2lyY2xlJztcblx0XHRcdGNhc2UgQWxlcnRUeXBlLldhcm5pbmc6XG5cdFx0XHRcdHJldHVybiAnZmEtYnVsbHNleWUnO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENwbHhBbGVydENvbXBvbmVudCB9IGZyb20gJy4vY3BseC1hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3BseEFsZXJ0U2VydmljZSB9IGZyb20gJy4vY3BseC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcblx0ZGVjbGFyYXRpb25zOiBbQ3BseEFsZXJ0Q29tcG9uZW50XSxcblx0ZXhwb3J0czogW0NwbHhBbGVydENvbXBvbmVudF0sXG5cdHByb3ZpZGVyczogW0NwbHhBbGVydFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQ3BseEFsZXJ0TW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDcGx4QWxlcnRNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtDcGx4QWxlcnRTZXJ2aWNlLCBSb3V0ZXJNb2R1bGVdXG5cdFx0fTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7SUFZQyxPQUFJO0lBQ0osVUFBTztJQUNQLFFBQUs7SUFDTCxVQUFPO0lBQ1AsT0FBSTs7b0JBSkosSUFBSTtvQkFDSixPQUFPO29CQUNQLEtBQUs7b0JBQ0wsT0FBTztvQkFDUCxJQUFJO0FBT0w7Ozs7SUFJQyxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTs0QkFGWCxLQUFLO3NCQWNYLElBQUksT0FBTyxFQUFTO1FBWHBDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQ2pDLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDckMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDMUI7cUJBQU07b0JBQ04sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNiO2FBQ0Q7U0FDRCxDQUFDLENBQUM7S0FDSDs7Ozs7SUFJRCxHQUFHLENBQUMsT0FBYztRQUNqQixPQUFPLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ2xDOzs7O0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkI7OztZQWpDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFuQlEsTUFBTTs7Ozs7Ozs7QUNGZjs7OztJQXlCQyxZQUFvQixJQUFzQjtRQUF0QixTQUFJLEdBQUosSUFBSSxDQUFrQjt1QkFGaEMsSUFBSSxLQUFLLEVBQVM7UUFHM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVk7WUFDakUsSUFBSSxLQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QixVQUFVLENBQUM7d0JBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDeEQsRUFBRSxJQUFJLENBQUMsQ0FBQTtpQkFDUjthQUNEO1NBQ0QsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFHRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNqQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFjO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU87Z0JBQ2hDLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTztvQkFBRSxPQUFPLElBQUksQ0FBQztRQUNyRCxPQUFPLEtBQUssQ0FBQztLQUNiOzs7Ozs7SUFHRCxjQUFjLENBQUMsS0FBWSxFQUFFLEtBQUs7UUFDakMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDeEIsVUFBVSxDQUFDO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDUjs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTztTQUNQO1FBRUQsUUFBUSxLQUFLLENBQUMsSUFBSTtZQUNqQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLHFCQUFxQixDQUFDO1lBQzlCLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ25CLE9BQU8sb0JBQW9CLENBQUM7WUFDN0IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDbEIsT0FBTyxrQkFBa0IsQ0FBQztZQUMzQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNyQixPQUFPLHFCQUFxQixDQUFDO1NBQzlCO0tBQ0Q7Ozs7O0lBR0QsWUFBWSxDQUFDLEtBQVk7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU87U0FDUDtRQUNELFFBQVEsS0FBSyxDQUFDLElBQUk7WUFDakIsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDckIsT0FBTyxnQkFBZ0IsQ0FBQztZQUN6QixLQUFLLFNBQVMsQ0FBQyxLQUFLO2dCQUNuQixPQUFPLGtCQUFrQixDQUFDO1lBQzNCLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2xCLE9BQU8sdUJBQXVCLENBQUM7WUFDaEMsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDckIsT0FBTyxhQUFhLENBQUM7U0FDdEI7S0FDRDs7O1lBdkZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTUjs7YUFFRjs7OztZQWpCZSxnQkFBZ0I7Ozs7Ozs7QUNEaEM7Ozs7SUFlQyxPQUFPLE9BQU87UUFDYixPQUFPO1lBQ04sUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO1NBQzNDLENBQUM7S0FDRjs7O1lBYkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7Z0JBQ3JDLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDN0IsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDN0I7Ozs7Ozs7Ozs7Ozs7OzsifQ==