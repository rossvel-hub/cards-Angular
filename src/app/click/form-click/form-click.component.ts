import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-form-click',
  templateUrl: './form-click.component.html',
  styleUrls: ['./form-click.component.css']
})
export class FormClickComponent implements OnInit {

  constructor (private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  public user = {
    name: 'Izzat Nadiri',
    age: 26
    }

  open(){
    const modal = this.modalService.open(ModalFormComponent);
    modal.componentInstance.auto= this.user;
    
    modal.result.then(
      this.handleModalModalFormComponent.bind(this),
      this.handleModalModalFormComponent.bind(this),
    )
  }
  
  handleModalModalFormComponent(){
   
  }
}
