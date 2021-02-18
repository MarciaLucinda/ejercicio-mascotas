import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class MascotaModule {}

export interface Mascota {
  id: number;
  nombre: string;
  origen: string;
  imagen: string;
}
