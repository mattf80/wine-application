
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { WineModule } from './wine/wine.module';
import { AdminModule } from './admin/admin.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

import './rxjs-extensions';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AdminModule,
    WineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
