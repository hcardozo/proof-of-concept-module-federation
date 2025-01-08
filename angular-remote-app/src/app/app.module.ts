import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TestModule,
    RouterModule.forRoot([])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(AppComponent, { injector: injector });
    customElements.define('angular-app-component', element);
  }
}
