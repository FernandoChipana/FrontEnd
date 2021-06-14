import { Component, OnInit } from '@angular/core';
import {NgbModal } from'@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-registracita',
  templateUrl: './registracita.component.html',
  styleUrls: ['./registracita.component.css']
})
export class RegistracitaComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

  openLg(content: any) {
    
 
    this.modal.open(content, { scrollable: true , size: 'lg'});
  }
}
