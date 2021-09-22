import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' //Modulo de add CHamadas HTTP dentro do componente
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { PalestrantesComponent } from './componentes/palestrantes/palestrantes.component';
import { NavComponent } from './shared/nav/nav.component';
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { TituloComponent } from './shared/titulo/titulo.component';
import { ContatosComponent } from './componentes/contatos/contatos.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

import { EventoService } from './services/evento.service';


@NgModule({
  declarations: [	 //Componentes
    AppComponent,
    NavComponent,
    TituloComponent,
    EventosComponent,
    PalestrantesComponent,
    ContatosComponent,
    DashboardComponent,
    DateTimeFormatPipe,
    PerfilComponent
   ],
  imports: [ //Modulos
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, //Modulo de add Chamadas HTTP dentro do componente
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
    NgxSpinnerModule
  ],
  providers: [//Tudo que está aqui, pode ser injetado em componentes (como uma Injeção de dependencia)
    EventoService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
