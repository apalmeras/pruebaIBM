import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {Location} from '@angular/common';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponentCliente implements OnInit {

  constructor(private clienteService: ClienteService, location: Location) { }

  ngOnInit() {
  }

  
  onSaveCliente(clienteForm: NgForm): void {
    console.log(clienteForm.value);
    if(clienteForm.value.idCliente==0){
      console.log("agregar cliente");
      this.clienteService.saveCliente(clienteForm.value).subscribe(cliente =>{
        location.reload()
      })
    }else{
      console.log("actualizar cliente");
      this.clienteService.editCliente(clienteForm.value).subscribe(cliente =>{
        location.reload()
      })
    }
  }

}
