import { Routes, RouterModule } from'@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarComponent } from './components/listar/listar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TurnoComponent } from './components/turno/turno.component';


const app_routes: Routes =[
    {path:'registro',component: RegistroComponent},
    {path:'listar',component: ListarComponent},
    {path:'inicio',component: InicioComponent},
    {path:'login',component: LoginComponent},
    {path:'turno',component: TurnoComponent},
    {path: '**', pathMatch:'full', redirectTo:'inicio'}
];


export const app_routing = RouterModule.forRoot(app_routes);
