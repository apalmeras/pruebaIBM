import { Component, OnInit } from '@angular/core';
import { DetalleConsumoService } from 'src/app/services/detalle-consumo.service';
import { DetalleConsumo } from 'src/app/model/detalleConsumo';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarjeta } from 'src/app/model/Tarjeta';
import { TarjetaService } from 'src/app/services/tarjeta/tarjeta.service';

@Component({
  selector: 'app-detalle-consumo',
  templateUrl: './detalle-consumo.component.html',
  styleUrls: ['./detalle-consumo.component.css']
})
export class DetalleConsumoComponent implements OnInit {

  private idTarjeta: number=0;

  private tarjetaSelected : Tarjeta ={
    idTarjeta: 0,
    numtarjeta: 0,
    ccv: 0,
    tiptarjeta: '',
    cliente: null
  }
  
  constructor(private detalleService: DetalleConsumoService, private _route: ActivatedRoute, private tarjetaService: TarjetaService) {
      this.idTarjeta = parseInt(this._route.snapshot.paramMap.get('id'),10);
      this.tarjetaSelected.idTarjeta = this.idTarjeta;
      if(this.idTarjeta>0){
        this.getTarjeta();
      }
   }
  private detalles: DetalleConsumo;

  ngOnInit() {
    if(this.idTarjeta>0){
      this.getDetallesTarjeta();
    }else{
      this.getDetalles();
    }
  }

  getTarjeta(){
    this.tarjetaService.buscar(this.idTarjeta).subscribe((tarjetaSelected: Tarjeta)=>(this.tarjetaSelected=tarjetaSelected));
  }


  getDetallesTarjeta(): void {
    this.detalleService
      .getDetalleTarjeta(this.idTarjeta)
      .subscribe((detalles: DetalleConsumo) => (this.detalles = detalles));
  }

  getDetalles(): void {
    this.detalleService
      .getDetalle()
      .subscribe((detalles: DetalleConsumo) => (this.detalles = detalles));
  }

  onDeleteDetelle(id: number):void{
    if(confirm("¿Esta seguro de eliminar el detalle?")){
      this.detalleService.deleteDetalle(id).subscribe();
    }
  }

  onPreUpdateDetalle(detalle: DetalleConsumo): void {
    this.detalleService.selectedDetalle=Object.assign({},detalle);
    this.detalleService.selectedTarjeta=this.tarjetaSelected;
  }

  resetForm(clienteForm?: NgForm): void {
    this.detalleService.selectedCliente = {
      idCliente: 0,
      nombre: '',
      direccion: '',
      ciudad: '',
      telefono: ''
    }
    this.detalleService.selectedTarjeta=this.tarjetaSelected;
    
  }
}
