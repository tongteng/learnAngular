import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynComponentComponent } from './dyn-component/dyn-component.component';
import { Child1Component } from './dyn-component/child-1/child-1.component';

@NgModule({
  declarations: [
    AppComponent,
    DynComponentComponent,
    Child1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
