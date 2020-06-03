import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CplxAlertService } from 'projects/cplx-alert/src/public_api';
import { ConfigDataTable } from 'projects/cplx-datatable/src/public_api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'librerias';
	constructor(private _sms: CplxAlertService, private _http: HttpClient) { }

	/**
	 * @param tipo {1=success,2=danger,3=warning,4=info}
	 */

	configtable = new ConfigDataTable();

	searchText: string = "";
	lista: any[];
	data: any[];
	inputselected;

	ngOnInit() {
		this.configtable.search = true;
		this.configtable.pagination = true;
		this.obtenerlista();
		this.obtenertabla();
	}

	go_alert(tipo) {
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
	}

	obtenerlista() {
		this._http.get<Object[]>("assets/lineas.json").subscribe(data => this.lista = data)
	}

	obtenertabla() {
		this._http.get<Object[]>("assets/tabla.json").subscribe(data => this.data = data)
	}


	cabeceras = ["numexp", "fecpre", "codprom", "nombre", "venest", "indpro", "codmotivo", "fecini", "fecsug", "fecfin", "subestado", "diasamp"]

}
