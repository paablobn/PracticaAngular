import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticulo } from './articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(
    private http: HttpClient
  ) { } 


  public obtenerArticulos(): Observable<IArticulo[]>{
    const urlEndPoint: string = "http://localhost:3003/articulos";
    return this.http.get<IArticulo[]>(urlEndPoint);
  }
}
