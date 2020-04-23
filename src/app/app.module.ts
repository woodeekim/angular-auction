import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule} from './todo/todo.module';
import ApplicationComponent from './components/application/application.component';
import CarouselComponent from './components/carousel/carousel.component';
import FooterComponent from './components/footer/footer.component';
import NavbarComponent from './components/navbar/navbar.component';
import ProductItemComponent from './components/product-item/product-item.component';
import SearchComponent from './components/search/search.component';
import {StarsComponent} from './components/stars/stars.component';
import { ProductService } from  './services/product.service';
import { HomeComponent } from './router-sample/home/home.component';
import { ProductComponent } from './router-sample/product/product.component';
import { RouterComponent} from './router-sample/router.component';


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
    RouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }
