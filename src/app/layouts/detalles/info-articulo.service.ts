import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDetalle } from './detalles.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoArticuloService {

  constructor(
    private http: HttpClient
  ) { } 

  public obtenerDetalles(id: string): Observable<IDetalle>{
    const urlEndPoint: string = "http://localhost:3003/articulo/"+id;
    return this.http.get<IDetalle>(urlEndPoint);
  }
}
