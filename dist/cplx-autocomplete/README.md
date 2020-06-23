## Instalación 
Component of Input Autocomplete 

### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ npm install cplx-autocomplete
$ npm install bootstrap
```

### Uso

Importar en **app.module.ts**

First:
```sh

import { CplxAutocompleteModule } from 'cplx-autocomplete/public_api';

imports: [
	 CplxAutocompleteModule
]
```

#### Selector global en **app.component.html**


```sh
<!--
[searchText] // text to search in JSON data
[data]   // list of JSON data for autocomplete and search
[placeholder] //string text for input placeholder
(selectedObject)  // JSON item selected
[params] //Params for filter and display list 
(textChange) // emit text change
[(loading)] //loading data
[filter] // to filter from the list
-->


<div class="container p-5">
	<label class="text-bold"> cplx-autocomplete with params and filter</label> {{inputselected | json}}
	<cplx-autocomplete [data]="lista" [filter]="true" (selectedObject)="inputselected = $event"
		[params]="['descripcion']" [placeholder]="'Buscar ...'"></cplx-autocomplete>
</div>
<hr>
<div class="container p-5">
	<label class="text-bold"> cplx-autocomplete without filter</label> {{searchText | json}} {{loading | json}}
	<cplx-autocomplete (textChange)="buscando($event)" [data]="lista" [(loading)]="loading"
		(selectedObject)="inputselected = $event" [placeholder]="'Buscar ...'" [params]="['id','descripcion']">
	</cplx-autocomplete>
</div>

	
```

### Author

 - Efrain Figueroa



