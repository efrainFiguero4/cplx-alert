import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
export interface Alert {
    mensaje?: string;
    tipo?: AlertType;
    class?: string;
}
export declare enum AlertType {
    None = 0,
    Success = 1,
    Error = 2,
    Warning = 3,
    Info = 4
}
export declare class CplxAlertService {
    private router;
    private routerchange;
    constructor(router: Router);
    private alerta;
    add(mensaje: Alert): void;
    getAlertas(): Observable<Alert>;
    clear(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CplxAlertService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CplxAlertService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNwbHgtYWxlcnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnQge1xyXG4gICAgbWVuc2FqZT86IHN0cmluZztcclxuICAgIHRpcG8/OiBBbGVydFR5cGU7XHJcbiAgICBjbGFzcz86IHN0cmluZztcclxufVxyXG5leHBvcnQgZGVjbGFyZSBlbnVtIEFsZXJ0VHlwZSB7XHJcbiAgICBOb25lID0gMCxcclxuICAgIFN1Y2Nlc3MgPSAxLFxyXG4gICAgRXJyb3IgPSAyLFxyXG4gICAgV2FybmluZyA9IDMsXHJcbiAgICBJbmZvID0gNFxyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENwbHhBbGVydFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICBwcml2YXRlIHJvdXRlcmNoYW5nZTtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKTtcclxuICAgIHByaXZhdGUgYWxlcnRhO1xyXG4gICAgYWRkKG1lbnNhamU6IEFsZXJ0KTogdm9pZDtcclxuICAgIGdldEFsZXJ0YXMoKTogT2JzZXJ2YWJsZTxBbGVydD47XHJcbiAgICBjbGVhcigpOiB2b2lkO1xyXG59XHJcbiJdfQ==