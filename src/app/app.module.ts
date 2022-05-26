import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NegozioComponent } from './negozio/negozio.component';
import { ProdottoComponent } from './negozio/prodotto/prodotto.component';
import { CarrelloComponent } from './negozio/carrello/carrello.component';

@NgModule({
  declarations: [
    AppComponent,
    NegozioComponent,
    ProdottoComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
