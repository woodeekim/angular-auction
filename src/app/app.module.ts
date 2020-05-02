import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './components/application/application.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductItemComponent} from './components/product-item/product-item.component';
import { SearchComponent} from './components/search/search.component';
import { StarsComponent } from './components/stars/stars.component';
import { ProductService } from  './services/product.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { DiApplicationComponent } from './example/dependency/di-application/di-application.component';
import { DiProductComponent } from './example/dependency/di-product/di-product.component';
import { DiMockProductComponent } from './example/dependency/di-mock-product/di-mock-product.component';
import { BopApplicationComponent } from './example/binding-observable-pipe/bop-application/bop-application.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ObservableEvenetHttpComponent } from './example/binding-observable-pipe/bop-application/observable-evenet-http/observable-evenet-http.component';
import { CustomPipeComponent } from './example/binding-observable-pipe/bop-application/custom-pipe/custom-pipe.component';
import {TemperaturePipe} from './example/binding-observable-pipe/bop-application/temperature.pipe';


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
    ProductDetailComponent,
    HomeComponent,
    DiApplicationComponent,
    DiProductComponent,
    DiMockProductComponent,
    BopApplicationComponent,
    ObservableEvenetHttpComponent,
    CustomPipeComponent,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService, {provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [BopApplicationComponent]
})

export class AppModule { }
