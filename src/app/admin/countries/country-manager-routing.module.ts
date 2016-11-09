import { RouterModule } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './countries.component';
import { CountryManagerComponent } from './country-manager.component';
import { CountryManagerHomeComponent } from './country-manager-home-component';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: 'countries', 
                component: CountryManagerComponent,
                children: [
                    {
                        path: '',
                        component: CountriesComponent,
                        children: [
                            {
                                path: ':id',
                                component: RegionsComponent
                            },
                            {
                                path: '',
                                component: CountryManagerHomeComponent
                            }
                        ]
                    }
                ]
             }
        ])
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class CountryManagerRoutingModule { }
