import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModules } from './contador/contador.module';
import { PokemonModule } from './pokemon/pokemon.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModules,
    PokemonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
