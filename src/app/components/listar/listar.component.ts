import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service";
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  constructor(public fmedicosservice:ApiService) { }

  ngOnInit(): void {
    
    this.fmedicosservice.getAllMedicos();
  }



}
