import { OnDestroy } from '@angular/core';
import { Alert, CplxAlertService } from './cplx-alert.service';
import { Subscription } from 'rxjs';
export declare class CplxAlertComponent implements OnDestroy {
    private _sms;
    subscription: Subscription;
    alertas: Alert[];
    timeout: number;
    constructor(_sms: CplxAlertService);
    ngOnDestroy(): void;
    validate_mensaje(mensaje: Alert): boolean;
    removerMensaje(alert: Alert, index: any): void;
    cssClass(alert: Alert): "alert alert-success" | "alert alert-danger" | "alert alert-info" | "alert alert-warning";
    cssClassIcon(alert: Alert): "fa-thumbs-o-up" | "fa-thumbs-o-down" | "fa-exclamation-circle" | "fa-bullseye";
}
