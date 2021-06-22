import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { turnosI } from 'src/app/models/turnos.interface';
import { ApiService } from "../../services/api/api.service";

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {

  datosTurnos: turnosI;

  nuevoForm = new FormGroup({
    id: new FormControl(''),
    turcod: new FormControl(''),
    codcon: new FormControl(''),
    nesp: new FormControl(''),
    turini: new FormControl(''),
    turfin: new FormControl(''),
    turtime: new FormControl(''),
    lun: new FormControl(''),
    mar: new FormControl(''),
    mie: new FormControl(''),
    jue: new FormControl(''),
    vier: new FormControl(''),
    sab: new FormControl(''),
    dom: new FormControl(''),
    obs: new FormControl(''),
    estado: new FormControl('')

  });

  constructor(public modal: NgbModal, private turnoApi:ApiService) { }

  ngOnInit(): void {
  }

  postForm(form:turnosI) { 

    this.turnoApi.postTurnos(form).subscribe();
  }
}
