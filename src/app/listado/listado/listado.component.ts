import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../mascotas/mascotas.service';
import { Mascota } from '../../mascota/mascota.module';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  listado: Mascota;
  constructor(private mascotas: MascotasService) {
    this.listado = mascotas;
  }

    this.getListadoMascotas();
  }

  getListadoMascotas() {
    this.mascotas.getMascotas().subscribe((data: Mascota) => {
      console.log('subscribe mascotas', data);
      this.listado = data;
    });
  }
}
