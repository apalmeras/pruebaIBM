import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Cliente } from 'src/app/model/Cliente';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }
  private clientes: Cliente;

  ngOnInit() {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService
      .getClientes()
      .subscribe((clientes: Cliente) => (this.clientes = clientes));
  }

  onDeleteBook(id: number):void{
    if(confirm("¿Esta seguro de eliminar el cliente?")){
      this.clienteService.deleteCliente(id).subscribe();
    }
  }

  onPreUpdateAsesor(cliente: Cliente): void {
    this.clienteService.selectedCliente=Object.assign({},cliente);
  }

  resetForm(clienteForm?: NgForm): void {
    this.clienteService.selectedCliente = {
      idCliente: 0,
      nombre:'',
      direccion:'',
      ciudad:'',
      telefono:''
    };
  }
}
