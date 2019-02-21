## Instalación 
Component of Datatable 
### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ npm install cplx-datatable
$ npm install font-awesome
$ npm install bootstrap
```

### Uso

Importar en **app.module.ts**

First:
```sh

import { CplxDatatableModule } from 'cplx-datatable/public_api';

imports: [
	 CplxDatatableModule
]
```

#### Importar en componente

```sh

import { ConfigDataTable } from 'cplx-datatable/public_api';
constructor() { }

configtable = new ConfigDataTable();

ngOnInit() {
	this.configtable.search = true; //show input search
	this.configtable.pagination = true; // show pagination
}

/** headers of table */
headers = ["numexp", "fecpre", "codprom", "nombre", "venest", "indpro", "codmotivo", "fecini", "fecsug", "fecfin", "subestado", "diasamp"]

/** content of table */
content = ["numexp", "fecpre", "codprom", "nombre", "venest", "indpro", "codmotivo", "fecini", "fecsug", "fecfin", "subestado", "diasamp"]

/** data for show in table **/
data = { "numexp": "IN003719", "fecpre": "", "codprom": "33065", "nombre": "HANAHISA ACEVEDO, CLAUDIA", "venest": "I", "indpro": "NO", "codmotivo": "", "fecini": "20/02/2019", "fecsug": "03/04/2019", "fecfin": "21/02/2019", "subestado": "", "diasamp": "0" };

```

#### Selector global en **app.component.html**


```sh
<!--
[itemlist]="" // list of JSON data
[header]=""   //string list of show table header
[content]=""  //string list of show table content
[loading]=""  //boolean of loading
[search]=""   //input search value
[config]=""   //configuracion => ConfigDataTable type
[pages]=""    //number list of pages
-->

<cplx-datatable [content]="content" [header]="headers" [itemlist]="data" [config]="configtable"></cplx-datatable>
	
```

### Author

 - Efrain Figueroa

License
----

MIT


