import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuditoriaComponent } from './auditoria.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AuditoriaComponent }
	])],
	exports: [RouterModule]
})
export class AuditoriaRoutingModule { }
