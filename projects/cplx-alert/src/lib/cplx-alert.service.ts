import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';


export interface Alert {
	mensaje?: string;
	tipo?: AlertType;
	class?: string;
}

export enum AlertType {
	None,
	Success,
	Error,
	Warning,
	Info
}

@Injectable({
	providedIn: 'root'
})

export class CplxAlertService {

	private routerchange = false;

	constructor(private router: Router) {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				if (this.routerchange) {
					this.routerchange = false;
				} else {
					this.clear();
				}
			}
		});
	}

	private alerta = new Subject<Alert>();

	add(mensaje: Alert) {
		mensaje.class = "ns-show"
		this.alerta.next(mensaje);
	};

	getAlertas(): Observable<Alert> {
		return this.alerta.asObservable();
	}

	clear() {
		this.alerta.next();
	}
}
