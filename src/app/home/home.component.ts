import { Component } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titre:string="Bienvenu à l'application"
  users:User[]=[];
   u1:User=new User("Ben Torkia","Nour El Houda",22);
   u2:User=new User("Ben Salah","Ahmed",25);
    u3:User=new User("Ben Amor","Mohamed",30);

constructor(){
  this.users.push(this.u1);
  this.users.push(this.u2);
  this.users.push(this.u3);

}


}
