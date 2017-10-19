import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildComponent } from './parent-child/child/child.component';
import { BrotherComponent } from './brother/brother.component';
import { EventBusService } from './brother/service/event-bus.service';
import { Brother1Component } from './brother/brother-1/brother-1.component';
import { Brother2Component } from './brother/brother-2/brother-2.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { LocalChild1Component } from './local-storage/local-child1/local-child1.component';
import { LocalChild2Component } from './local-storage/local-child2/local-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    ChildComponent,
    BrotherComponent,
    Brother1Component,
    Brother2Component,
    LocalStorageComponent,
    LocalChild1Component,
    LocalChild2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
