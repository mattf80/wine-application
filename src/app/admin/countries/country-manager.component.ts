import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
    <h2>Manage countries and associated regions</h2>
    <router-outlet></router-outlet>
    `
})
export class CountryManagerComponent {}