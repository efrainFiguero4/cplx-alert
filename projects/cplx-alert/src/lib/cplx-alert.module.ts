import { NgModule } from '@angular/core';
import { CplxAlertComponent } from './cplx-alert.component';
import { CplxAlertService } from './cplx-alert.service';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [CplxAlertComponent],
	exports: [CplxAlertComponent],
	providers: [CplxAlertService]
})

export class CplxAlertModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CplxAlertModule,
			providers: [CplxAlertService, RouterModule]
		};
	}
}
