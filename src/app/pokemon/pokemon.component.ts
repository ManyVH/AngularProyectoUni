import { Component, OnInit, NgModule } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  
})
export class PokemonComponent implements OnInit {
 



  constructor(private servicioPokemon: PokemonService) {

   }

  ngOnInit(): void {
  }

  mostrar(){
    console.log(this.servicioPokemon.obtenerList);
  }
  

  

}
