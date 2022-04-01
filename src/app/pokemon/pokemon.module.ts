import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './Lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component';






@NgModule({
  declarations: [
      PokemonComponent,MainComponent, ListaComponent, AgregarComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PokemonComponent,MainComponent, ListaComponent, AgregarComponent
  ]
})
export class PokemonModule { }
