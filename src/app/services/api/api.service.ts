import { Injectable } from '@angular/core';
import { fmedicosI } from '../../models/fmedicos.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  myAppUrl = 'https://localhost:44339/';
  myApiUrl = 'api/fmedicos';
  list: fmedicosI[] | undefined;
  constructor(private http: HttpClient) { }

  getAllMedicos() {
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
      .then(data => { this.list = data as fmedicosI[]; })

  }
}
