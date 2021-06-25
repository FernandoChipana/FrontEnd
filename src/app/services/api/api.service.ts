import { Injectable } from '@angular/core';
import { fmedicosI } from '../../models/fmedicos.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { turnosI } from 'src/app/models/turnos.interface';
import { fmclinicI } from 'src/app/models/fmclinic.interface';
import { fespecialidadI } from 'src/app/models/fespecialidad.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  myAppUrl = 'https://localhost:44339/';
  
  list: fmedicosI[];
  listEspecialidad: fespecialidadI[];
  constructor(private http: HttpClient) { }

  getAllMedicos() {
    this.http.get(this.myAppUrl + 'fmedicos').toPromise()
      .then(data => { this.list = data as fmedicosI[]; })

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
