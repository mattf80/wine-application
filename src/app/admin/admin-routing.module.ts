import { CountriesFormComponent } from './countries/countries-form/countries-form.component';
import { CountriesComponent } from './countries/countries.component';
import { GrapesComponent } from './grapes/grapes.component';
import { AdminComponent } from './admin.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: '/admin',
                pathMatch: 'full'
            },
            {
                path: 'admin',
                component: AdminComponent,
                children: [
                    {
                        path: 'countries',
                        component: CountriesComponent
                    },
                    {
                        path: 'grapes',
                        component: GrapesComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }