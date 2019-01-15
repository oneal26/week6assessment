import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllreedsComponent } from "./allreeds/allreeds.component";
import { ReedComponent } from "./reed/reed.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'allReeds', component: AllreedsComponent },
  { path: 'makeAreed', component: ReedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
