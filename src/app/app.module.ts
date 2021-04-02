import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';
import { SuperheroComponent } from './components/superhero/superhero.component';
import { DefeatedSuperheroesComponent } from './components/defeated-superheroes/defeated-superheroes.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesComponent,
    SuperheroComponent,
    DefeatedSuperheroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
