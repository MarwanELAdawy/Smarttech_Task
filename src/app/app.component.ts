import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout>
      <nb-layout-header fixed>Awesome Nebular</nb-layout-header>
      <nb-layout-column>
        <button nbButton>Hello World!</button>
      </nb-layout-column>
    </nb-layout>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartTechTask';
}
