import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDateStruct,NgbDateParserFormatter,NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fmclinicI } from 'src/app/models/fmclinic.interface';
import { ApiService } from "../../services/api/api.service";



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  
})
export class RegistroComponent implements OnInit {

  datospaciente: fmclinicI;
  fecha:Date;
  nuevoFormClientes = new FormGroup({

    nomb: new FormControl(''),
    tipdoc: new FormControl(''),
    ndoc: new FormControl(''),
    fechnac: new FormControl(''),
    sexo: new FormControl(''),
    email: new FormControl(''),
    cel: new FormControl('')

  });
  model2: string;
  constructor(private turnoApi: ApiService) { }
  
  
  ngOnInit(): void {
   
  }

  postForm(form: fmclinicI) {
    

    this.turnoApi.postPacientes(form).subscribe();
    console.log(form);
  }

}
