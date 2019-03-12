import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Asesor } from 'src/app/model/Asesor';


@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  constructor(private http: HttpClient) {}
  asesores: Observable<any>;

  public selectedAsesor: Asesor = {
    idAsesor: 0,
    nombre: '',
    especialidad: ''
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getAsesores(){
    const url_api = "http://localhost:8080/asesores";
    return this.http.get(url_api);
  }

  deleteAsesor(id: number){
    const url_api = `http://localhost:8080/asesores/${id}`;
    return this.http.delete<AsesorService>(url_api,{headers:this.headers})
    .pipe(map(data=>data));
  }

  saveAsesor(asesor: Asesor){
    const url_api = `http://localhost:8080/asesores/`;
    return this.http.put(url_api, asesor);
  }

  editAsesor(asesor: Asesor){
    const url_api = `http://localhost:8080/asesores/`;
    return this.http.post(url_api, asesor);
  }
}
