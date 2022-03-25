
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { CalculadoraComponent } from './calculadora/calculador.component';


@NgModule({
    declarations:[
        ContadorComponent, CalculadoraComponent
    ],
    exports:[
        ContadorComponent, CalculadoraComponent
    ]
})
export class ContadorModules{}