import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PolizaComponent } from './poliza.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PolizaComponent }
	])],
	exports: [RouterModule]
})
export class PolizaRoutingModule { }
