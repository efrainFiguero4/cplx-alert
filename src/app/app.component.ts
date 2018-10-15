import { Component } from '@angular/core';
import { CplxAlertService } from 'projects/cplx-alert/src/public_api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'librerias';
	constructor(private _sms: CplxAlertService) { }

	go_alert(tipo) {
		this._sms.add({ tipo: tipo, mensaje: "Mensaje de prueba " + Math.random() })
	}
}
