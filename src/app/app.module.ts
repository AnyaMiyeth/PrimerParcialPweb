import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { PruebabComponent } from './pruebab/pruebab.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentaComponent,
    PruebabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
