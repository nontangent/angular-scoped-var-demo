import { Component, HostBinding, HostListener } from '@angular/core';

const STYLE = `// organism.component.scss
@use 'scoped-var' as *;
:host {
  @include var(--color, green);
  color: var(--color);

  > * {
    --color: #{var(--color)};
  }
}`

@Component({
  selector: 'organism',
  template: '<code [innerText]="style"></code><molecule></molecule><molecule></molecule>',
  styles: [STYLE],
  host: {class: 'box'},
})
export class OrganismComponent {
  @HostBinding('attr.expanded') expanded = false;
  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation();
    this.expanded = !this.expanded
  }

  style = STYLE;
}
