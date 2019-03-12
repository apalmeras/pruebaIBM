import { Component, OnInit } from '@angular/core';
import { AsesorService } from 'src/app/services/asesor/asesor.service';
import { Asesor } from 'src/app/model/Asesor';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html',
  styleUrls: ['./asesor.component.css']
})
export class AsesorComponent implements OnInit {

  constructor(private asesorService: AsesorService) { }
  private asesores: Asesor; 
  private asesor: Asesor; 
  pageActual: number=1;
  public myCounter: number = 0;

  ngOnInit() {
    this.getAsesores();
  }

  getAsesores(): void {
    this.asesorService
      .getAsesores()
      .subscribe((asesores: Asesor) => (this.asesores = asesores));
  }

  onDeleteBook(id: number):void{
    if(confirm("¿Esta seguro de eliminar el asesor?")){
      this.asesorService.deleteAsesor(id).subscribe();
    }
  }

  onPreUpdateAsesor(asesor: Asesor): void {
    this.asesorService.selectedAsesor=Object.assign({},asesor);
  }

  resetForm(asesorForm?: NgForm): void {
    this.asesorService.selectedAsesor = {
      idAsesor: 0,
      nombre:'',
      especialidad:''
    };
  }


  

  

  
  
}
