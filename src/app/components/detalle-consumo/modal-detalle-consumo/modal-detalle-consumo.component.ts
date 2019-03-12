import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DetalleConsumoService } from 'src/app/services/detalle-consumo.service';

@Component({
  selector: 'app-modal-detalle-consumo',
  templateUrl: './modal-detalle-consumo.component.html',
  styleUrls: ['./modal-detalle-consumo.component.css']
})
export class ModalDetalleConsumoComponent implements OnInit {

  constructor(private detalleService: DetalleConsumoService, location: Location) { }

  ngOnInit() {
  }

  onSaveDetalle(detalleForm: NgForm): void {
    console.log(detalleForm.value);
    if(detalleForm.value.idDetalleConsumo==0){
      console.log("agregar cliente");
      this.detalleService.saveDetalle(detalleForm.value).subscribe(cliente =>{
        location.reload()
      })
    }else{
      console.log("actualizar cliente");
      this.detalleService.editDetalle(detalleForm.value).subscribe(cliente =>{
        location.reload()
      })
    }
  }

}
