import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormEndComponent } from '../modal-form-end/modal-form-end.component';

@Component({
  selector: 'app-end-form',
  templateUrl: './end-form.component.html',
  styleUrls: ['./end-form.component.css']
})
export class EndFormComponent implements OnInit {

  constructor(private modalServiceEnd: NgbModal) { }

  ngOnInit(){
  }

  clickAddTodo(){
    const modal = this.modalServiceEnd.open(ModalFormEndComponent);
    modal.result.then(
      this.handleModalModalFormEndComponent.bind(this),
      this.handleModalModalFormEndComponent.bind(this)
    )
  }

  handleModalModalFormEndComponent(){
    alert('se ha cerrado el modal')
  }

}

