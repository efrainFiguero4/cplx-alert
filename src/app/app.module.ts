import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CplxAlertModule, CplxAlertService } from 'projects/cplx-alert/src/public_api';
import { RouterModule, Routes } from '@angular/router';
import { CplxDatatableModule } from 'projects/cplx-datatable/src/public_api';

const routes: Routes = [{
	path: '', component: AppComponent
}]

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CplxDatatableModule,
		CplxAlertModule.forRoot(),
		RouterModule.forRoot(routes)
	],
	providers: [CplxAlertService],
	bootstrap: [AppComponent]
})

export class AppModule {

}
