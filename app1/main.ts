import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app1.module'

platformBrowserDynamic().bootstrapModule(AppModule);


//offline bootstrap AOT

// The browser platform without a compiler
// import { platformBrowser } from '@angular/platform-browser';

// Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModule);