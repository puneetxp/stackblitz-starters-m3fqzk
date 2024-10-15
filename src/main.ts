import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RedlightComponent } from "./app/redlight/redlight.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-redlight>
  `,
  imports: [RedlightComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
