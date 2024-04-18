import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Menú',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Registro',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Pólizas',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/pages/poliza']
                    },
                    {
                        label: 'Auditoría',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/pages/auditoria']
                    },
                    {
                        label: 'Baja',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/baja']
                    },
                    {
                        label: 'Prestamo',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['']
                    },
                    {
                        label: 'Depreciación',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['']
                    },
                    {
                        label: 'Listado de Bienes',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['']
                    },
                    {
                        label: 'Listado por Persona',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['']
                    },
                    {
                        label: 'Listado de Sede',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['']
                    }
                ]
            },
        ];
    }
}
