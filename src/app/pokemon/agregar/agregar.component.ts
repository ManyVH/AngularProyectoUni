import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
    
    constructor(private servicoP: PokemonService){}


    nuevo:Pokemon={
      nombre: '',
      hp: 0
    }
    // @Output() onPokemonAgregado = new EventEmitter<Pokemon>();
    agregar(){
      this.servicoP.agregarPokemon(this.nuevo)
      this.nuevo = {
        nombre:'',
        hp:0
      }
    }
    quitar(){
      this.servicoP.quitar()
    }
}
