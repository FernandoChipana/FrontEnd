import { Component, OnInit } from '@angular/core';

import { NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  

  constructor(public calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

  
}
