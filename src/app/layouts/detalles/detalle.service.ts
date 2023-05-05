import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDetalle } from './detalles.interface';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  constructor(
    private http: HttpClient
  ) { } 


  public obtenerArticulos(): Observable<IDetalle[]>{
    const urlEndPoint: string = "http://localhost:3003/detalles";
    return this.http.get<IDetalle[]>(urlEndPoint);
  }
}
