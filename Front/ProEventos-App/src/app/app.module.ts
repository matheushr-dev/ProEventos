import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' //Modulo de add CHamadas HTTP dentro do componente
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [	 //Componentes
    AppComponent,
    EventosComponent,
    PalestrantesComponent,
      NavComponent
   ],
  imports: [ //Modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Modulo de add CHamadas HTTP dentro do componente
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
