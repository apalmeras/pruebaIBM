import { Component, OnInit } from '@angular/core';
import { AsesorService } from 'src/app/services/asesor/asesor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private asesores:AsesorService) { }

  ngOnInit() {
    this.getAsesores();
  }

  getAsesores(){
    this.asesores.getAsesores()
    .subscribe( (asesores) => console.log(asesores));
  }

}
