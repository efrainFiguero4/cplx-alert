import { OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Alert, CplxAlertService } from './cplx-alert.service';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CplxAlertComponent implements OnDestroy, OnChanges {
    private _sms;
    subscription: Subscription;
    alertas: Alert[];
    timeout: number;
    constructor(_sms: CplxAlertService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    validate_mensaje(mensaje: Alert): boolean;
    removerMensaje(alert: Alert, id: string): void;
    cssClass(alert: Alert): "alert alert-success" | "alert alert-danger" | "alert alert-info" | "alert alert-warning";
    cssClassIcon(alert: Alert): "fa-thumbs-o-up" | "fa-thumbs-o-down" | "fa-exclamation-circle" | "fa-bullseye";
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CplxAlertComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CplxAlertComponent, "cplx-alert", never, { "alertas": "alertas"; "timeout": "timeout"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY3BseC1hbGVydC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0LCBDcGx4QWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9jcGx4LWFsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ3BseEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBfc21zO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBhbGVydGFzOiBBbGVydFtdO1xyXG4gICAgdGltZW91dDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoX3NtczogQ3BseEFsZXJ0U2VydmljZSk7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICB2YWxpZGF0ZV9tZW5zYWplKG1lbnNhamU6IEFsZXJ0KTogYm9vbGVhbjtcclxuICAgIHJlbW92ZXJNZW5zYWplKGFsZXJ0OiBBbGVydCwgaWQ6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBjc3NDbGFzcyhhbGVydDogQWxlcnQpOiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiB8IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgfCBcImFsZXJ0IGFsZXJ0LWluZm9cIiB8IFwiYWxlcnQgYWxlcnQtd2FybmluZ1wiO1xyXG4gICAgY3NzQ2xhc3NJY29uKGFsZXJ0OiBBbGVydCk6IFwiZmEtdGh1bWJzLW8tdXBcIiB8IFwiZmEtdGh1bWJzLW8tZG93blwiIHwgXCJmYS1leGNsYW1hdGlvbi1jaXJjbGVcIiB8IFwiZmEtYnVsbHNleWVcIjtcclxufVxyXG4iXX0=