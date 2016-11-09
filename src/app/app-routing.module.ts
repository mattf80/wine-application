import { WineComponent } from './wine/wine.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignupFormComponent } from './signup-form/signup-form.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'admin', component: AdminComponent},
      { path: 'wine', component: WineComponent },
      { path: 'signup', component: SignupFormComponent},
      { path: '', redirectTo: 'wine', pathMatch: 'full' }
      //{ path: '**', component: NotFoundComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
