import { Injectable } from '@angular/core';
import { fmedicosI } from '../../models/fmedicos.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { turnosI, turnosIv } from 'src/app/models/turnos.interface';
import { fmclinicI } from 'src/app/models/fmclinic.interface';
import { fespecialidadI } from 'src/app/models/fespecialidad.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  myAppUrl = 'https://localhost:44339/';
  
  list: fmedicosI[];
  listEspecialidad: fespecialidadI[];
  listturnosv: turnosIv[];
  constructor(private http: HttpClient) { }

  getAllMedicos() {
    this.http.get(this.myAppUrl + 'fmedicos').toPromise()
      .then(data => { this.list = data as fmedicosI[]; })

  }
  gettAllTurnos(){
    this.http.get(this.myAppUrl + 'turnos').toPromise()
    .then(data => { this.listturnosv = data as turnosIv[]; })
  }
  getSingleTurno(cmp):Observable<turnosI>{
    let direccion =this.myAppUrl+"turnos/"+cmp;
    return this.http.get<turnosI>(direccion);

  }

  postTurnos(form:turnosI){
    let direccion =this.myAppUrl+'turnos'
    return this.http.post(direccion,form);
  }
  
  postPacientes(form:fmclinicI){
    let direccion =this.myAppUrl+'clientes'
    return this.http.post(direccion,form);
  }

  getAllEspecialidad() {
    this.http.get(this.myAppUrl + 'especialidad').toPromise()
      .then(data => { this.listEspecialidad = data as fespecialidadI[]; })

  }

}
