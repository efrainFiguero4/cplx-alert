import { Component, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Alert, CplxAlertService, AlertType } from './cplx-alert.service';
import { isNullOrUndefined } from 'util';
import { Subscription } from 'rxjs';

@Component({
	selector: 'cplx-alert',
	templateUrl: './cplx-alert.component.html',
	styleUrls: ['./cplx-alert.component.css']
})

export class CplxAlertComponent implements OnDestroy, OnChanges {

	subscription: Subscription;
	@Input() alertas = new Array<Alert>();
	@Input() timeout: number;

	constructor(private _sms: CplxAlertService) {
		this.subscription = this._sms.getAlertas().subscribe((alert: Alert) => {
			if (alert && !isNullOrUndefined(alert.mensaje)) {
				if (!this.validate_mensaje(alert)) {
					this.alertas.push(alert);
					let timeout = isNullOrUndefined(this.timeout) ? 5000 : this.timeout;
					setTimeout(() => {
						this.removerMensaje(alert, alert.id);
					}, timeout)
				}
			}
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.alertas.length > 0) {
			for (let index = 1; index < this.alertas.length; index++) {
				let timeout = (isNullOrUndefined(this.timeout) ? 5000 : this.timeout) + index + 1;
				setTimeout(() => {
					this.removerMensaje(this.alertas[index], this.alertas[index].id);
				}, timeout)
			}
		}
	}


	ngOnDestroy() {
		if (!isNullOrUndefined(this.subscription))
			this.subscription.unsubscribe();
	}

	validate_mensaje(mensaje: Alert) {
		if (this.alertas.length)
			for (const alerta of this.alertas)
				if (alerta.mensaje == mensaje.mensaje) return true;
		return false;
	}


	removerMensaje(alert: Alert, id: string) {
		alert.class = 'ns-hide';
		setTimeout(() => {
			let idx = this.alertas.findIndex(a => a.id == id);
			this.alertas.splice(idx, 1);
		}, 230);
	}

	//[ngClass]="{'alert-success text-success': m.tipo == 1 ,'alert-danger text-danger':m.tipo == 2 ,'alert-warning text-warning':m.tipo == 3 ,'alert-primary text-primary':m.tipo == 4}"
	cssClass(alert: Alert) {
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

	//[ngClass]="{'fa-thumbs-o-up': m.tipo == 1 ,'fa-thumbs-o-down':m.tipo == 2 ,'fa-exclamation-circle':m.tipo == 3 ,'fa-bullseye':m.tipo == 4}"
	cssClassIcon(alert: Alert) {
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
