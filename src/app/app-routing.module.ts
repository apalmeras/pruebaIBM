import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AsesorComponent } from './components/asesor/asesor.component';
import { Page404Component } from './components/page404/page404.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

const routes: Routes = 
[
    {path: '', component: HomeComponent},
    {path: 'asesor', component: AsesorComponent},
    {path: 'cliente', component: ClienteComponent},
    {path: 'tarjeta', component: TarjetaComponent},
    {path: 'asesor/:id', component: AsesorComponent},
    {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
