import { Injectable } from '@angular/core';


import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Tarjeta } from 'src/app/model/Tarjeta';
import { Cliente } from 'src/app/model/Cliente';
@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private http: HttpClient) { }


  public clienteTarjeta: Cliente ={
    idCliente: 0,
    nombre: '',
    direccion: '',
    ciudad: '',
    telefono: ''
  }

  public selectedTarjeta: Tarjeta = {
    idTarjeta: 0,
    numtarjeta: 0,
    ccv:0,
    tiptarjeta:'',
    cliente: this.clienteTarjeta
  }

  
  

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getTarjetas(){
    const url_api = "http://localhost:8080/tarjetas";
    return this.http.get(url_api);
  }

  deleteTarjeta(id: number){
    const url_api = `http://localhost:8080/tarjetas/${id}`;
    return this.http.delete<TarjetaService>(url_api,{headers:this.headers})
    .pipe(map(data=>data));
  }

  saveTarjeta(tarjeta: Tarjeta){
    const url_api = `http://localhost:8080/tarjetas/`;
    return this.http.put(url_api, tarjeta);
  }

  editTarjeta(tarjeta: Tarjeta){
    const url_api = `http://localhost:8080/tarjetas/`;
    return this.http.post(url_api, tarjeta);
  }
  
  buscar(id: number){
    const url_api = `http://localhost:8080/tarjetas/buscar/${id}`;
    return this.http.get(url_api);
  }
}
