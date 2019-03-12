import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from 'src/app/model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public selectedCliente: Cliente = {
    idCliente: 0,
    nombre: '',
    direccion: '',
    ciudad:'',
    telefono:''
  };

  
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getClientes(){
    const url_api = "http://localhost:8080/clientes";
    return this.http.get(url_api);
  }

  deleteCliente(id: number){
    const url_api = `http://localhost:8080/clientes/${id}`;
    return this.http.delete<ClienteService>(url_api,{headers:this.headers})
    .pipe(map(data=>data));
  }

  saveCliente(cliente: Cliente){
    const url_api = `http://localhost:8080/clientes/`;
    return this.http.put(url_api, cliente);
  }

  editCliente(cliente: Cliente){
    const url_api = `http://localhost:8080/clientes/`;
    return this.http.post(url_api, cliente);
  }
}
