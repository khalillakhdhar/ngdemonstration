import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondeComponent } from './seconde/seconde.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/accueil',pathMatch:'full'
  },
  {
    path:'accueil',component:HomeComponent
  },
  {
    path:'seconde',component:SecondeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
