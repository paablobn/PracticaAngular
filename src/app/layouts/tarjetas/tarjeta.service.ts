import { Injectable } from '@angular/core';
import { Tarjeta } from './tarjeta.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITarjetas } from './tarjetas.interface';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(
    private http: HttpClient
  ) { } 


  public obtenerTarjetasRest(): Observable<ITarjetas[]>{
    const urlEndPoint: string = "http://localhost:3003/tarjetas";
    return this.http.get<ITarjetas[]>(urlEndPoint);
  }
  
   
}
