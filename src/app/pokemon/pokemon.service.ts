import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonList: Pokemon[]=[{
    nombre: 'Charmander',
    hp: 500
  },{
    nombre: 'Bulbasaour',
    hp: 600
  },{
    nombre: 'Squirtle',
    hp: 800
  }];
  constructor() { }

  get obtenerList(){
    return [...this.pokemonList];
  }
  
  agregarPokemon(nuevoPokemon:Pokemon){

    this.pokemonList.push(nuevoPokemon)
  }

  quitar(){
    this.pokemonList.pop()
  }
  
}
