import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api/api.service";
import { NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  

  constructor(public calendar: NgbCalendar ,public citaApi:ApiService) { }

  ngOnInit(): void {

    this.citaApi.getAllEspecialidad();
    this.citaApi.getAllMedicos();
  }

  
}
