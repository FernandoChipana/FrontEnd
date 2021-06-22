import { Injectable } from '@angular/core';
import { fmedicosI } from '../../models/fmedicos.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { turnosI } from 'src/app/models/turnos.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  myAppUrl = 'https://localhost:44339/';
  
  list: fmedicosI[] | undefined;
  constructor(private http: HttpClient) { }

  getAllMedicos() {
    this.http.get(this.myAppUrl + 'fmedicos').toPromise()
      .then(data => { this.list = data as fmedicosI[]; })

  }
  postTurnos(form:turnosI){
    let direccion =this.myAppUrl+'turnos'
    return this.http.post(direccion,form);
  }

}
