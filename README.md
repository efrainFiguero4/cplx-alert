# Librerias

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##Instalacion 

`npm i cplx-alert`

##Usar
Importar en `app.module.ts`

`imports: [`
        `CplxAlertModule.forRoot()`
`],`


usar en componente:

`constructor(private _sms: CplxAlertService) { }`

`/**`
`* @param tipo {1=success,2=danger,3=warning,4=info}`
`*/`

`go_alert(tipo) {`
    `this._sms.add({ tipo: tipo, mensaje: "Mensaje de prueba " + Math.random() })`
`}`

insertar en component.html:

`<button (click)="go_alert(1)" class="btn btn-success mx-2">Alert success </button>`
`<button (click)="go_alert(2)" class="btn btn-danger mx-2">Alert danger </button>`
`<button (click)="go_alert(4)" class="btn btn-info mx-2">Alert info </button>`
`<button (click)="go_alert(3)" class="btn btn-warning mx-2">Alert warning </button>`

`<cplx-alert></cplx-alert>`
