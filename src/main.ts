import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Greeting} from './app/greeting';
import {RouterSampleRoutingModule} from './app/router-sample/router-sample-routing/router-sample-routing.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const greeting = new Greeting();
greeting .sayHello('keunkyeong');
