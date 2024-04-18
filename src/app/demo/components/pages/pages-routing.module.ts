import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'poliza', loadChildren: () => import('./poliza/poliza.module').then(m => m.PolizaModule) },
        { path: 'auditoria', loadChildren: () => import('./auditoria/auditoria.module').then(m => m.AuditoriaModule) },
        { path: 'baja', loadChildren: () => import('./baja/baja.module').then(m => m.BajaModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
