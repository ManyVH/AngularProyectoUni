import { Component, ElementRef, ViewChild, ViewChildren } from "@angular/core";




@Component(
    {
        selector:'app-calculadora',
        templateUrl:'./calculadora.component.html',
        styleUrls: ['./calculadora.component.css']
        
    }
)
export class CalculadoraComponent {
    valores:string = '';
    simbolos:String = '/*-+';
    contadorOp:number = 0;
    pasarNum(valor:string){
        if (!(this.simbolos.includes(valor) && this.valores==='')) {
            
            //Entra y comprueba si ya hay un operador
            if (this.contadorOp===0) {
                this.valores +=valor;
                //Saber si es un operador
                if (this.simbolos.includes(valor)) {
                    this.contadorOp = 1;
                }
                console.log('toy');
            }else{
                //Comprueba si se juntan operadores
                if (this.simbolos.includes(this.valores.charAt(this.valores.length-1)) && this.simbolos.includes(valor)) {
                //     //Si si es sustituir y si no es pasar y despues realizar op
                    
                        this.valores =this.valores.replace(/\+|\/|-|\*/, valor);
                }else{
                        if (this.simbolos.includes(valor)) {
                            this.calcular();
                            this.valores +=valor;
                        }else{
                            this.valores +=valor;
                        }
                        
                }
            }
            
        }
        
        
        
    }
    calcular(){
        if (this.valores.includes('+')) {
            let datos = this.valores.split('+');
            this.valores = (Number.parseFloat(datos[0]) + Number.parseFloat(datos[1]))+'';
        }else if (this.valores.includes('-')) {
            let datos = this.valores.split('-');
            this.valores = (Number.parseFloat(datos[0]) - Number.parseFloat(datos[1]))+'';
        }else if (this.valores.includes('/')) {
            let datos = this.valores.split('/');
            this.valores = (Number.parseFloat(datos[0]) / Number.parseFloat(datos[1]))+'';
        }else if (this.valores.includes('*')) {
            let datos = this.valores.split('*');
            this.valores = (Number.parseFloat(datos[0]) * Number.parseFloat(datos[1]))+'';
        }
        
        
    }
    reset(){
        this.valores =''
        this.contadorOp =0;
    }

    
}