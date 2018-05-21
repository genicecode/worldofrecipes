import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { GeschichteComponent } from './geschichte/geschichte.component';
import { FeloferieComponent } from './feloferie/feloferie.component';
import { EntdeckenComponent } from './entdecken/entdecken.component';
import { KontinenteComponent } from './kontinente/kontinente.component';


@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    GeschichteComponent,
    FeloferieComponent,
    EntdeckenComponent,
    KontinenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
