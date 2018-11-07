import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http' desde ver2 hasta versiones anteriores a la 4;
import { HttpModule } from '@angular/http'; // angular 4.3 en adelante

/* importamos todos los componentes que creemos*/
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    // insertamos el componente importado previamente.
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
