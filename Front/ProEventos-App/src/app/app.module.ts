import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' //Modulo de add CHamadas HTTP dentro do componente
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';

@NgModule({
  declarations: [ //Componentes
    AppComponent,
    EventosComponent,
    PalestrantesComponent
   ],
  imports: [ //Modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Modulo de add CHamadas HTTP dentro do componente
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
