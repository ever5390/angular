import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  { path: '' , component: EmpleadoComponent},
  { path: 'empleado', component: EmpleadoComponent},
  { path: 'home', component: HomeComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', component: EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
