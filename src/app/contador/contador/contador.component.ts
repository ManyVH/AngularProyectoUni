import { Component } from "@angular/core";




@Component(
    {
        selector:'app-contador',
        templateUrl:'./contador.component.html'
        
    }
)
export class ContadorComponent {
    titulo: string = 'Contador App';
    contador:number = 0;
    base: number = 5
    valor =''
    aumentar(incremento:number){
        this.contador+=incremento;
    }
    restar(incremento:number){
        this.contador-= incremento; 
    }

    cambiarBase(event:any){
        this.valor = event.target.value.toString();
        this.base = Number.parseInt(this.valor);
    }
    
}