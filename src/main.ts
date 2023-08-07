/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



import { enableProdMode } from "@angular/core";

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
