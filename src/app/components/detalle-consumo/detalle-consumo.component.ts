import { Component, OnInit } from '@angular/core';
import { DetalleConsumoService } from 'src/app/services/detalle-consumo.service';
import { DetalleConsumo } from 'src/app/model/detalleConsumo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detalle-consumo',
  templateUrl: './detalle-consumo.component.html',
  styleUrls: ['./detalle-consumo.component.css']
})
export class DetalleConsumoComponent implements OnInit {

  constructor(private detalleService: DetalleConsumoService) { }
  private detalle: DetalleConsumo;

  ngOnInit() {
  }

  getDetalles(): void {
    this.detalleService
      .getDetalle()
      .subscribe((detalle: DetalleConsumo) => (this.detalle = detalle));
  }

  onDeleteDetelle(id: number):void{
    if(confirm("¿Esta seguro de eliminar el detalle?")){
      this.detalleService.deleteDetalle(id).subscribe();
    }
  }

  onPreUpdateDetalle(detalle: DetalleConsumo): void {
    this.detalleService.selectedDetalle=Object.assign({},detalle);
  }

  resetForm(clienteForm?: NgForm): void {
    this.detalleService.selectedCliente = {
      idCliente: 0,
      nombre: '',
      direccion: '',
      ciudad: '',
      telefono: ''
    }
    this.detalleService.selectedTarjeta={
      idTarjeta: 0,
      numtarjeta: 0,
      ccv: 0,
      tiptarjeta: '',
      cliente: this.detalleService.selectedCliente ,
    }
  
    this.detalleService.selectedDetalle = {
      idDetalleConsumo:0,
      tarjeta: this.detalleService.selectedTarjeta,
      fecha: null,
      descripcion: '',
      monto: 0
    }
    
  }
}
