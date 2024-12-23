import { Component } from '@angular/core';

@Component({
  selector: 'app-seconde',
  standalone: false,

  templateUrl: './seconde.component.html',
  styleUrl: './seconde.component.css'
})
export class SecondeComponent {

  compteur:number=0;
  incrementer(){
    this.compteur++;
  }
  decrementer(){
    if(this.compteur>=0)
    this.compteur--;
  else
  {
  alert("Impossible de décrémenter");
  }
  }

}
