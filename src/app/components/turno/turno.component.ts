import { Component, OnInit } from '@angular/core';
import {NgbModal } from'@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

  
}
