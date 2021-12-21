import { Component, HostBinding, HostListener } from '@angular/core';

const STYLE = `// template.component.scss
@use 'scoped-var' as *;
:host {
  @include var(--color, blue);
  color: var(--color);
  organism:first-of-type {
    --color: #{var(--color)};
  }
}`

@Component({
  selector: 'template',
  template: '<code [innerText]="style"></code><organism></organism><organism></organism>',
  styles: [STYLE],
  host: {class: 'box'},
})
export class TemplateComponent {
  @HostBinding('attr.expanded') expanded = true;
  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation();
    this.expanded = !this.expanded
  }

  style = STYLE;
}
