import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CplxAlertService, Alert } from 'projects/cplx-alert/src/public_api';
import { ConfigDataTable } from 'projects/cplx-datatable/src/public_api';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
	inputselected2;
	inputselected3;
	loading: boolean = false;
	ls_empresas: any[];

	form = new FormGroup({
		nombre: new FormControl('Nancy', Validators.minLength(2)),
	});
	get first(): any {
		return this.form.get('first');
	}

	onSubmit(): void {
		console.log(this.form.value);  // {first: 'Nancy', last: 'Drew'}
	}

	setValue() {
		this.form.setValue({ first: 'Carson', last: 'Drew' });
	}

	ngOnInit() {
		this.configtable.search = true;
		this.configtable.pagination = true;
		this.obtenerlista();
		this.obtenertabla();
	}

	buscar_empresas(busqueda) {
		var empresa = {};
		this.searchText = busqueda;
		empresa['usuario'] = "6711";
		empresa['servicio'] = "1";
		empresa['empresa'] = busqueda;
		this.loading = true;
		this.ls_empresas = [];
		console.log(busqueda);

		this.obtener_empresas(empresa)
	}

	obtener_empresas(request: any) {
		this._http.post<any[]>("http://localhost:8087/v1/nominacion/lista/empresas", request).subscribe(data => {
			this.loading = false;
			this.ls_empresas = data
		})
	}
	formulario = new FormGroup({
		value: new FormControl(null)
	});

	alertas = new Array<Alert>()
	alertass = [
		{ tipo: 2, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" },
		{ tipo: 2, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" },
		{ tipo: 2, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" },
		{ tipo: 2, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" },
		{ tipo: 2, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" },
		{ tipo: 2, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" },
		{ tipo: 2, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" },
		{ tipo: 2, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" },
		{ tipo: 2, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" }
	]
	gotodo() {
		this.alertas = this.alertass;
	}

	go_alert(tipo) {
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
		this._sms.add({ tipo: tipo, mensaje: String(Math.random()) + "lhsoidh isdhfuisdhi uhsduifhisdufhuisdhfuisdhfiusdfhidsofhuisdhifuhsdiufhsdiufhsdiohofuihsdoiu uhfuisdhfiusdhifu" })
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
