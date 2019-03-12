import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta/tarjeta.service';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-tarjeta-modal',
  templateUrl: './tarjeta-modal.component.html',
  styleUrls: ['./tarjeta-modal.component.css']
})
export class TarjetaModalComponent implements OnInit {

  constructor(private tarjetaService: TarjetaService, location: Location,private clienteService: ClienteService) { }

  private clientes: Cliente;
  private clienteSelected: string = "";

  ngOnInit() {
    console.log("here");
    this.getClientes();
  }


  getClientes(): void{
    this.clienteService.getClientes().subscribe((clientes: Cliente)=>(this.clientes= clientes));
  }

  onSaveTarjeta(tarjetaForm: NgForm): void {
    
    //tarjetaForm.value.cliente=this.tarjetaService.clienteTarjeta;
    
    console.log(this.clienteSelected);
    console.log(tarjetaForm.value);
    if(tarjetaForm.value.idTarjeta==0){
      console.log("agregar cliente");
      this.tarjetaService.saveTarjeta(tarjetaForm.value).subscribe(tarjera =>{
        location.reload()
      })
    }else{
      console.log("actualizar cliente");
      this.tarjetaService.editTarjeta(tarjetaForm.value).subscribe(tarjeta =>{
        location.reload()
      })
    }
  }

}
