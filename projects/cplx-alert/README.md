## Instalación 
Componente global de alertas.
### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ npm install cplx-alert
$ npm install font-awesome
$ npm install bootstrap
```

### Uso

Importar en **app.module.ts**

Primero:
```sh
imports: [
	 CplxAlertModule.forRoot()
]
```
Luego agregar **CplxAlertService** como **provider** en **app.module.ts**:
```sh
providers: [CplxAlertService]
```
#### Importar en componente

```sh
constructor(private _sms: CplxAlertService) { }

/**
* @param tipo {1=success,2=danger,3=warning,4=info}
*/
go_alert(tipo) {
    this._sms.add({ tipo: tipo, mensaje: "Mensaje de prueba " +Math.random() })
}
```

#### Selector global en **app.component.html**

```sh
<button (click)="go_alert(1)" class="btn btn-success mx-2">Alert success </button>
<button (click)="go_alert(2)" class="btn btn-danger mx-2">Alert danger </button>
<button (click)="go_alert(4)" class="btn btn-info mx-2">Alert info </button>
<button (click)="go_alert(3)" class="btn btn-warning mx-2">Alert warning </button>
<cplx-alert></cplx-alert>
```

### Author

 - Efrain Figueroa

License
----

MIT


