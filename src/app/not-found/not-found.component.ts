import { Component } from '@angular/core';

@Component({
    template: `
    <div class="jumbotron text-center">
        <h1>404 Not Found</h1>
        <p>This is not the droid you're looking for <a routerLink="/">home</a>.</p>
    </div>
    `
})

export class NotFoundComponent { }