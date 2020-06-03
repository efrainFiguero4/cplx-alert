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
(selected)  // JSON item selected
[params] //Params for filter and display list 
-->

<div class="container p-5">
	<label class="text-bold"> cplx-autocomplete </label> {{inputselected | json}}
	<cplx-autocomplete [searchText]="searchText" [data]="lista" (selected)="inputselected = $event"
		[placeholder]="'Buscar ...'" [params]="['id','descripcion']"></cplx-autocomplete>
</div>
	
```

### Author

 - Efrain Figueroa



