import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [
    AppComponent
  ], // todo componente tem que ser declarado, modulos nâo podem ser declarados
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule
  ], // todo modulo fica dentro de imports
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
