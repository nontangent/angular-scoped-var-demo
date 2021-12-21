import { Component, HostBinding, HostListener } from '@angular/core';

const STYLE = `// app.component.scss
@use 'scoped-var/strict' as *;
:host {
  @include var(--color, red);
  color: var(--color);
}`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [STYLE],
  host: {'class': 'box'},
})
export class AppComponent {
  @HostBinding('attr.expanded') expanded = true;
  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation();
    this.expanded = !this.expanded
  }

  innerText = STYLE;
}
