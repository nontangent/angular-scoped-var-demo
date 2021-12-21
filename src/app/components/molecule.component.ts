import { Component, HostBinding, HostListener } from '@angular/core';

const STYLE = `// molecule.component.scss
@use 'scoped-var' as *;
:host {
  @include var(--color, orange);
  color: var(--color);
}`

@Component({
  selector: 'molecule',
  template: '<code [innerText]="style"></code>',
  styles: [STYLE],
  host: {class: 'box'},
})
export class MoleculeComponent {
  @HostBinding('attr.expanded') expanded = false;
  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation();
    this.expanded = !this.expanded
  }

  style = STYLE;
}
