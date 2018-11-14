import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StartComponent } from './start/start.component';
import { CoffeeGrindingComponent } from './coffee-grinding/coffee-grinding.component';
import { CleanFilterComponent } from './clean-filter/clean-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CoffeeGrindingComponent,
    CleanFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
