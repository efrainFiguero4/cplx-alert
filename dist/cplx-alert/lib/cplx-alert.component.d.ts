import { OnDestroy } from '@angular/core';
import { Alert, CplxAlertService } from './cplx-alert.service';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CplxAlertComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CplxAlertComponent, "cplx-alert", never, { "timeout": "timeout"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BseC1hbGVydC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY3BseC1hbGVydC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnQsIENwbHhBbGVydFNlcnZpY2UgfSBmcm9tICcuL2NwbHgtYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDcGx4QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBfc21zO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBhbGVydGFzOiBBbGVydFtdO1xyXG4gICAgdGltZW91dDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoX3NtczogQ3BseEFsZXJ0U2VydmljZSk7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgdmFsaWRhdGVfbWVuc2FqZShtZW5zYWplOiBBbGVydCk6IGJvb2xlYW47XHJcbiAgICByZW1vdmVyTWVuc2FqZShhbGVydDogQWxlcnQsIGluZGV4OiBhbnkpOiB2b2lkO1xyXG4gICAgY3NzQ2xhc3MoYWxlcnQ6IEFsZXJ0KTogXCJhbGVydCBhbGVydC1zdWNjZXNzXCIgfCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHwgXCJhbGVydCBhbGVydC1pbmZvXCIgfCBcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIjtcclxuICAgIGNzc0NsYXNzSWNvbihhbGVydDogQWxlcnQpOiBcImZhLXRodW1icy1vLXVwXCIgfCBcImZhLXRodW1icy1vLWRvd25cIiB8IFwiZmEtZXhjbGFtYXRpb24tY2lyY2xlXCIgfCBcImZhLWJ1bGxzZXllXCI7XHJcbn1cclxuIl19