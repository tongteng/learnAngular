import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FatherComponent } from './father/father.component';
import { Child1Component } from './father/child-1/child-1.component';
import { Child2Component } from './life-cycle/child-2/child-2.component';
import { TestNgContentComponent } from './test-ng-content/test-ng-content.component';
import { Child3Component } from './test-ng-content/child-3/child-3.component';
import { ParentComponent } from './parent/parent.component';
import { Child11Component } from './parent/child-11/child-11.component';
import { Child22Component } from './parent/child-22/child-22.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    FatherComponent,
    Child1Component,
    Child2Component,
    TestNgContentComponent,
    Child3Component,
    ParentComponent,
    Child11Component,
    Child22Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
