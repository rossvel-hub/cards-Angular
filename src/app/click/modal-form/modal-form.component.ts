import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})

export class ModalFormComponent implements OnInit {
  constructor (private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  resultado!: string;

  formDatos = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  submit() {
    console.log("entro");
    if (this.formDatos.valid)
    {
      this.resultado = ` Datos capturados:
      Nombre: ${this.formDatos.value.name}
      Email: ${this.formDatos.value.email}
      Mensage: ${this.formDatos.value.description} `;
    }
    else
      this.resultado =  "Hay campos vacios o invalidos en el formulario";
  }

  close(){
    this.modalService.dismissAll(ModalFormComponent);
  }

}


