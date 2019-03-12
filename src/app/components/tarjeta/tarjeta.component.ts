import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta/tarjeta.service';
import { Tarjeta } from 'src/app/model/Tarjeta';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/model/Cliente';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  constructor(private tarjetaService: TarjetaService) { }

  private tarjetas: Tarjeta;
  private clienteTarjeta: Cliente;

  ngOnInit() {
    this.getTarjetas();
    
  }


  getTarjetas(): void {
    this.tarjetaService
      .getTarjetas()
      .subscribe((tarjetas: Tarjeta) => (this.tarjetas = tarjetas));
  }

  onDeleteTarjeta(id: number):void{
    if(confirm("¿Esta seguro de eliminar esta tarjeta?")){
      this.tarjetaService.deleteTarjeta(id).subscribe();
    }
  }

  onPreUpdateTarjeta(tarjeta: Tarjeta): void {
    this.tarjetaService.selectedTarjeta=Object.assign({},tarjeta);
    this.tarjetaService.clienteTarjeta=this.tarjetaService.selectedTarjeta.cliente;
    this.tarjetaService.clienteSelected=this.tarjetaService.selectedTarjeta.cliente.idCliente.toString();
  }

  resetForm(clienteForm?: NgForm): void {
    this.tarjetaService.clienteTarjeta ={
      idCliente: 0,
      nombre: '',
      direccion: '',
      ciudad: '',
      telefono: ''
    }
    this.tarjetaService.selectedTarjeta = {
      idTarjeta: 0,
      numtarjeta: 0,
      ccv:0,
      tiptarjeta:'',
      cliente:this.tarjetaService.clienteTarjeta
    };
  }

}
