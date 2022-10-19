import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //VARIABLES
  num1:string="";
  num2:string="";
  resultado:string="";
  borrar:Number;
    constructor() {}
      calcularSuma(){
        this.resultado=(parseInt(this.num1)+parseInt(this.num2)).toString();
      }
      calcularResta(){
        this.resultado=(parseInt(this.num1)-parseInt(this.num2)).toString();
      }
      calcularMultiplicar(){
        this.resultado=(parseInt(this.num1)*parseInt(this.num2)).toString();
      }
      calcularDividir(){
        this.resultado=(parseInt(this.num1)/parseInt(this.num2)).toString();
      }
      borra(){
        this.resultado=("0");
      }
    }
