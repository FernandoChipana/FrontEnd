import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { turnosI } from 'src/app/models/turnos.interface';
import { ApiService } from "../../services/api/api.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html'
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

  @Input() nombre :string;
  constructor( private turnoApi:ApiService, private route:Router,private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let turnoscmp = this.activerouter.snapshot.paramMap.get('cmp');
    this.turnoApi.getSingleTurno(turnoscmp).subscribe( data=>{
      this.datosTurnos=data;
      
      this.nuevoForm.setValue({
        'id':this.datosTurnos.id,
        'turcod':this.datosTurnos.turcod,
        'codcon' :this.datosTurnos.codcon,
        'nesp':this.datosTurnos.nesp,
        'turini' :this.datosTurnos.turini,
        'turfin':this.datosTurnos.turfin,
        'turtime':this.datosTurnos.turtime,
        'lun':this.datosTurnos.lun,
        'mar' :this.datosTurnos.mar,
        'mie' :this.datosTurnos.mie,
        'jue':this.datosTurnos.jue,
        'vier':this.datosTurnos.vier,
        'sab':this.datosTurnos.sab,
        'dom' :this.datosTurnos.dom,
        'obs' :this.datosTurnos.obs,
        'estado' :this.datosTurnos.estado

      });
      
      
    })

  }

  postForm(form:turnosI) { 

    this.turnoApi.postTurnos(form).subscribe();
    
    console.log(form);
  }
  public active = 1;
}
