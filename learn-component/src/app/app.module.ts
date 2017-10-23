import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNgContentComponent } from './my-ng-content/my-ng-content.component';
import { ChildComponent } from './my-ng-content/child/child.component';
import { Child1Component } from './my-ng-content/child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNgContentComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
