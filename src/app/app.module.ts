import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import {app_routing,} from './app.routes';

import { RegistroComponent } from './components/registro/registro.component'
import { ListarComponent } from './components/listar/listar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { TurnoComponent } from './components/turno/turno.component';
import { RegistracitaComponent } from './components/registracita/registracita.component';
import { CitaComponent } from './components/cita/cita.component'

import{HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ListarComponent,
    InicioComponent,
    LoginComponent,
    FooterComponent,
    MenuComponent,
    TurnoComponent,
    RegistracitaComponent,
    CitaComponent,
    
  ],
  imports: [
    BrowserModule,
    app_routing,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
