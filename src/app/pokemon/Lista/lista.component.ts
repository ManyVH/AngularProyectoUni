import { Component, Input, } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';




@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
  
  
})
export class ListaComponent{
  constructor(private servicioPo: PokemonService){}
  
  
  
  get listaPokemon() : Pokemon[] {
    return this.servicioPo.obtenerList;
  }
  

}