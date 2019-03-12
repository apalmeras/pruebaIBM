import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DetalleConsumo } from '../model/detalleConsumo';
import { Tarjeta } from '../model/Tarjeta';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class DetalleConsumoService {

  constructor(private http: HttpClient) { }

  
  public selectedCliente: Cliente = {
    idCliente: 0,
    nombre: '',
    direccion: '',
    ciudad: '',
    telefono: ''
  }
  public selectedTarjeta: Tarjeta ={
    idTarjeta: 0,
    numtarjeta: 0,
    ccv: 0,
    tiptarjeta: '',
    cliente: this.selectedCliente,
  }

  public selectedDetalle: DetalleConsumo = {
    idDetalleConsumo:0,
    tarjeta: this.selectedTarjeta,
    fecha: null,
    descripcion: '',
    monto: 0
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getDetalle(){
    const url_api = "http://localhost:8080/detalleConsumo";
    return this.http.get(url_api);
  }

  deleteDetalle(id: number){
    const url_api = `http://localhost:8080/detalleConsumo/${id}`;
    return this.http.delete<DetalleConsumoService>(url_api,{headers:this.headers})
    .pipe(map(data=>data));
  }

  saveDetalle(detalle: DetalleConsumo){
    const url_api = `http://localhost:8080/detalleConsumo/`;
    return this.http.put(url_api, detalle);
  }

  editDetalle(detalle: DetalleConsumo){
    const url_api = `http://localhost:8080/detalleConsumo/`;
    return this.http.post(url_api, detalle);
  }
}
