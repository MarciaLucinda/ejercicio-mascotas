import { Injectable } from '@angular/core';
import { Mascota } from '../mascota/mascota.module';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MascotasService {
  private configUrl: string;
  constructor(private http: HttpClient) {
    this.configUrl = `${environment.baseUrl}/?api_key=${environment.baseKey}`;
  }

  getMascotas(): Observable<Mascota> {
    const listado = this.http.get<Mascota>(this.configUrl);
    return listado;
  }
}
