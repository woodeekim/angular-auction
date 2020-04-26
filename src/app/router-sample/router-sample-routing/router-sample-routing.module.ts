import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductChildComponent } from '../product-child/product-child.component';
import { SellerComponent } from '../seller/seller.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductChildComponent,
    children: [
      { path: '', component: ProductDescriptionComponent },
      { path: 'seller/:id', component: SellerComponent}
    ] },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RouterSampleRoutingModule { }
