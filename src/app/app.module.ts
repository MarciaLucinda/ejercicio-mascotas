import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MascotasService } from '../app/mascotas/mascotas.service';
import { HomeComponent } from './home/home/home.component';
import { ListadoComponent } from './listado/listado/listado.component';
import { DetalleComponent } from './detalle/detalle/detalle.component';
import { NavbarComponent } from './navbvar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoComponent,
    DetalleComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [MascotasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
