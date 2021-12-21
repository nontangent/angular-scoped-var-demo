import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template.component';
import { OrganismComponent } from './components/organism.component';
import { MoleculeComponent } from './components/molecule.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    OrganismComponent,
    MoleculeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
