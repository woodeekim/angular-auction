import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';

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
import { FilterPipe } from './components/pipes/filter.pipe';
import { ComponentAppComponent } from './example/componenet-communication/component-app/component-app.component';
import { InputPropertyBindingComponent } from './example/componenet-communication/component-app/io-property/input-property-binding';
import {InputPropertyBindingGetterSetterComponent} from './example/componenet-communication/component-app/io-property/input-property-binding-getter-setter';
import {PriceQuoterComponent} from './example/componenet-communication/component-app/io-property/output-property-binding';
import { MediatorAppComponent } from './example/componenet-communication/component-app/mediator/mediator-app/mediator-app.component';
import { PriceQuoterSecondComponent } from './example/componenet-communication/component-app/mediator/mediator-app/components/price-quoter.component';
import { OrderComponent } from './example/componenet-communication/component-app/mediator/mediator-app/components/order.component';
import { ProjectionAppComponent } from './example/componenet-communication/component-app/projection/projection-app/projection-app.component';
import { FirstProjectionChildComponent } from './example/componenet-communication/component-app/projection/projection-app/firstProjection/firstProjectionChild';
import { FirstProjectionParentComponent } from './example/componenet-communication/component-app/projection/projection-app/firstProjection/firstProjectionParent';
import { SecondProjectionChildComponent} from './example/componenet-communication/component-app/projection/projection-app/secondProjection/secondProjectionChild';
import { SecondProjectionParentComponent } from './example/componenet-communication/component-app/projection/projection-app/secondProjection/secondProjectionParent';
import { LifecycleParentComponent } from './example/componenet-communication/component-app/lifecycle/lifecycle-parent';
import { LifecycleChildComponent } from './example/componenet-communication/component-app/lifecycle/lifecycle-child';
import { ExposingParentComponent } from './example/componenet-communication/component-app/exposing-child-api/exposing-parent';
import { ExposingChildComponent } from './example/componenet-communication/component-app/exposing-child-api/exposing-child-api';
import { FormAppComponent } from './example/form/form-app';
import { TemplateDrivenComponent } from './example/form/template/template-driven';
import { ReactiveDrivenComponent } from './example/form/reactive/reactive-driven';
import { FormArrayNamesComponent } from './example/form/reactive/form-array-names';
import { ReactiveFormComponent } from './example/form/reactive/reactive-form';
import { GrowableItemsFormComponent } from './example/form/reactive/growable-items-form';

/*
* bootstrap: AppComponent -> ApplicationComponent 변경
*/

// 운영 모드를 활성화하려면 bootstrap() 함수를 실행하기 전에 enableProdMode(); 함수를 실행하면 된다.;

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
    TemperaturePipe,
    FilterPipe,
    ComponentAppComponent,
    InputPropertyBindingComponent,
    InputPropertyBindingGetterSetterComponent,
    PriceQuoterComponent,
    MediatorAppComponent,
    PriceQuoterSecondComponent,
    OrderComponent,
    ProjectionAppComponent,
    FirstProjectionParentComponent,
    FirstProjectionChildComponent,
    SecondProjectionChildComponent,
    SecondProjectionParentComponent,
    LifecycleParentComponent,
    LifecycleChildComponent,
    ExposingParentComponent,
    ExposingChildComponent,
    TemplateDrivenComponent,
    FormAppComponent,
    ReactiveDrivenComponent,
    FormArrayNamesComponent,
    ReactiveFormComponent,
    GrowableItemsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService, {provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [ApplicationComponent]
})

export class AppModule { }
