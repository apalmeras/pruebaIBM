import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta/tarjeta.service';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-tarjeta-modal',
  templateUrl: './tarjeta-modal.component.html',
  styleUrls: ['./tarjeta-modal.component.css']
})
export class TarjetaModalComponent implements OnInit {

  constructor(private tarjetaService: TarjetaService, location: Location,private clienteService: ClienteService) { }

  private clientes: Cliente;
  private clienteSelected: number = 0;

  public isError= false;
  private error: string ="Llene información correctamente";
  
  public selectedCliente: Cliente = {
    idCliente: 0,
    nombre: '',
    direccion: '',
    ciudad:'',
    telefono:''
  };

  ngOnInit() {
    console.log("here ---- "+this.tarjetaService.clienteTarjeta.idCliente);
    this.getClientes();
    
  }


  getClientes(): void{
    this.clienteService.getClientes().subscribe((clientes: Cliente)=>(this.clientes= clientes));
  }

  onSaveTarjeta(tarjetaForm: NgForm): void {
    if(this.validarFormulario(tarjetaForm)){
    //tarjetaForm.value.cliente=this.tarjetaService.clienteTarjeta;
      var x= +this.tarjetaService.clienteSelected;

      this.clienteSelected = parseInt(this.tarjetaService.clienteSelected.toString().trim(),2);
      
      console.log(`valor seleccionado ${this.tarjetaService.clienteSelected}`);
      console.log(`valor seleccionado ${this.clienteSelected}`);
      console.log(`valor seleccionado ${x}`);
     
      this.selectedCliente.idCliente = x;
      tarjetaForm.value.cliente = this.selectedCliente;

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
    }else{
        this.isError=true;
        setTimeout(()=>{
          this.isError=false;
        },5000);
    }
  }

  validarFormulario(tarjetaForm: NgForm): boolean{
    console.log(tarjetaForm.value.ccv);
    
    var numtarjeta  = tarjetaForm.value.numtarjeta+"";
    console.log(numtarjeta.length);
    
    if(tarjetaForm.valid){
        if((tarjetaForm.value.ccv>99) && (tarjetaForm.value.ccv<=9999)){
            if(numtarjeta.length==12){
              return true;
            }else{
              this.error="la tarjeta debe tener una longitud de 12 números";
              return false;
            }
        }else{
          this.error = "El ccv debe ser de 3 o 4 digitos";
          return false;
        }
    }else{
      return false;
    }
  }

}
