import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './router-sample/home/home.component';
import { ProductChildComponent } from './router-sample/product-child/product-child.component';
import { ProductDescriptionComponent } from './router-sample/product-description/product-description.component';
import { SellerComponent } from './router-sample/seller/seller.component';
import {LoginGuards} from './router-sample/guards/login-guards';
import {UnsavedChangesGuards} from './router-sample/guards/unsaved_changes-guards';
import { HomeChatComponent } from './chat/components/home-chat/home-chat.component';
import { ChatPageComponent } from './chat/components/chat-page/chat-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'product/:id', component: ProductChildComponent,
    children: [
      { path: '', component: ProductDescriptionComponent},
      { path: 'seller/:id', component: SellerComponent }
    ], canActivate: [LoginGuards], canDeactivate: [UnsavedChangesGuards]}
];

const routesChat: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeChatComponent },
  { path: 'chat', component: ChatPageComponent, outlet: 'aux'}
];

@NgModule({
  imports: [RouterModule.forRoot(routesChat)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
