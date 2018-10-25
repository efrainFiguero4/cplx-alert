import { Observable } from 'rxjs';
import { Router } from '@angular/router';
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
}
