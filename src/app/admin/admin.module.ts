import { CountriesFormComponent } from './countries/countries-form/countries-form.component';
import { CountryService } from './../services/country.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { GrapesComponent } from './grapes/grapes.component';
import { CountriesComponent } from './countries/countries.component';
import { AddItemFormComponent } from './shared/add-item-form/add-item-form.component';
import { RegionsComponent } from './countries/regions/regions.component';
import { LoadingCursorComponent } from './shared/simple-controls/loading-cursor/loading-cursor.component';





@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, GrapesComponent, CountriesComponent, CountriesFormComponent, AddItemFormComponent, RegionsComponent, LoadingCursorComponent],
  providers:[CountryService]
})
export class AdminModule { }
