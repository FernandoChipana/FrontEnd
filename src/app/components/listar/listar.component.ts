import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import { turnosI, turnosIv } from 'src/app/models/turnos.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  constructor(public fturnosv:ApiService, private router:Router) { }

  public dias:string;

  ngOnInit(): void {
    
    

    this.fturnosv.gettAllTurnos();
   
 
  }

  editarTurno(cmp: string){
    this.router.navigate(['turno',cmp]);
  }

}
