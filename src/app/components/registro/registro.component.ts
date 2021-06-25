import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDateStruct,NgbDateParserFormatter,NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fmclinicI } from 'src/app/models/fmclinic.interface';
import { ApiService } from "../../services/api/api.service";


@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}
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
  constructor(private turnoApi: ApiService,private dateAdapter: NgbDateAdapter<string>) { }
  
  date:Date;
  
  ngOnInit(): void {
    let date = "2021-06-12";
    this.nuevoFormClientes.patchValue({
      'fechnac':date

    })
  }

  postForm(form: fmclinicI) {
    

    this.turnoApi.postPacientes(form).subscribe();
    console.log(form);
  }

}
