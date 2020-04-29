import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterSampleRoutingModule } from './router-sample/router-sample-routing/router-sample-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule} from './todo/todo.module';
import { ApplicationComponent } from './components/application/application.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductItemComponent} from './components/product-item/product-item.component';
import { SearchComponent} from './components/search/search.component';
import { StarsComponent } from './components/stars/stars.component';
import { ProductService } from  './services/product.service';
import { HomeComponent } from './router-sample/home/home.component';
import { ProductComponent } from './router-sample/product/product.component';
import { RouterComponent} from './router-sample/router.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductParamComponent } from './router-sample/product-param/product-param.component';
import { ProductParamDataComponent } from './router-sample/product-param-data/product-param-data.component';
import { ProductChildComponent } from './router-sample/product-child/product-child.component';
import { SellerComponent } from './router-sample/seller/seller.component';
import { ProductDescriptionComponent } from './router-sample/product-description/product-description.component';
import {LoginGuards} from './router-sample/guards/login-guards';
import {UnsavedChangesGuards} from './router-sample/guards/unsaved_changes-guards';
import { HomeChatComponent } from './chat/components/home-chat/home-chat.component';
import { ChatPageComponent } from './chat/components/chat-page/chat-page.component';
import { MainChatComponent } from './chat/main_chat.component';
import {LuxuryModule} from './chat/components/luxury/luxury.module';
import {LuxuryComponent} from './chat/components/luxury/luxury.component';

/*
* bootstrap: AppComponent -> ApplicationComponent 변경
*/

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent,
    HomeComponent,
    ProductComponent,
    RouterComponent,
    ProductParamComponent,
    ProductParamDataComponent,
    ProductChildComponent,
    SellerComponent,
    ProductDescriptionComponent,
    HomeChatComponent,
    ChatPageComponent,
    MainChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    RouterSampleRoutingModule,
    LuxuryModule
  ],
  providers: [ProductService, {provide: LocationStrategy, useClass: HashLocationStrategy }, LoginGuards, UnsavedChangesGuards, MainChatComponent, HomeChatComponent, ChatPageComponent, LuxuryComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
