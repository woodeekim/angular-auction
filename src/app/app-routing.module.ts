import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './router-sample/home/home.component';
import {ProductComponent} from './router-sample/product/product.component';


const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'product', component : ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
