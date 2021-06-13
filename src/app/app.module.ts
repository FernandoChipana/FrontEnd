import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component'

import {app_routing} from './app.routes';

import { ListarComponent } from './components/listar/listar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { TurnoComponent } from './components/turno/turno.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistracitaComponent } from './components/registracita/registracita.component'

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
    RegistracitaComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    NgbModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
