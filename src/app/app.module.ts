import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CplxAlertModule, CplxAlertService } from 'projects/cplx-alert/src/public_api';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
	path: '', component: AppComponent
}]

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule, CplxAlertModule.forRoot(), RouterModule.forRoot(routes)
	],
	providers: [CplxAlertService],
	bootstrap: [AppComponent]
})

export class AppModule {

}
