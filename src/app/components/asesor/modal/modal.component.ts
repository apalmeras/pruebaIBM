import { Component, OnInit } from '@angular/core';
import { AsesorService } from 'src/app/services/asesor/asesor.service';
import {NgForm} from '@angular/forms';
import {Location} from '@angular/common';



@Component({
  selector: 'app-modal-asesor',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private asesorService: AsesorService, private location: Location) { }
  
  ngOnInit() {
  }

  onSaveAsesor(asesorForm: NgForm): void {
    console.log(asesorForm.value);
    if(asesorForm.value.idAsesor==0){
      console.log("agregar asesor");
      this.asesorService.saveAsesor(asesorForm.value).subscribe(asesor =>{
        location.reload()
      })
    }else{
      console.log("actualizar asesor");
      this.asesorService.editAsesor(asesorForm.value).subscribe(asesor =>{
        location.reload()
      })
    }
  }
  

}
