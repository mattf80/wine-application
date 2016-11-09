
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineRoutingModule } from './wine-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { WineComponent } from './wine.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineFormComponent } from './wine-form/wine-form.component';
import { WineService } from './../services/wine.service';
import { TastingNoteFormComponent } from './tasting-note-form/tasting-note-form.component';
import { WineSearchComponent } from './wine-search/wine-search.component';

@NgModule({
  imports: [
    CommonModule,
    WineRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [WineComponent, WineListComponent, WineDetailComponent, WineFormComponent, TastingNoteFormComponent, WineSearchComponent],
  providers: [WineService]
})
export class WineModule { }
