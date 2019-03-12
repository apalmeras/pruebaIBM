import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsesorComponent } from './components/asesor/asesor.component';
import { Page404Component } from './components/page404/page404.component';
import { AsesorService } from './services/asesor/asesor.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/asesor/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ModalComponentCliente } from './components/cliente/modal/modal.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { TarjetaModalComponent } from './components/tarjeta/tarjeta-modal/tarjeta-modal.component';
import { DetalleConsumoComponent } from './components/detalle-consumo/detalle-consumo.component';
import { ModalDetalleConsumoComponent } from './components/detalle-consumo/modal-detalle-consumo/modal-detalle-consumo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AsesorComponent,
    Page404Component,
    ModalComponent,
    ClienteComponent,
    ModalComponentCliente,
    TarjetaComponent,
    TarjetaModalComponent,
    DetalleConsumoComponent,
    ModalDetalleConsumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AsesorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
