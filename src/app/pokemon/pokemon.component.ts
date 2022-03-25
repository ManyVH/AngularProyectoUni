import { Component, OnInit, NgModule } from '@angular/core';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  
})
export class PokemonComponent implements OnInit {
  listaPokemon: Pokemon[] = [{
    nombre: 'Charmander',
    hp: 500
  },{
    nombre: 'Bulbasaour',
    hp: 600
  },{
    nombre: 'Squirtle',
    hp: 800
  }]

  nuevo:Pokemon ={
    nombre: "",
    hp: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.listaPokemon.push(this.nuevo);
    const nuevo2:Pokemon ={
      nombre: "",
      hp: 0
    }
    this.nuevo =  nuevo2;
  }

  quitar(){
    this.listaPokemon.pop()
  }
  

}
