import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoria } from './categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { } 


  public obtenerCategorias(): Observable<ICategoria[]>{
    const urlEndPoint: string = "http://localhost:3003/categorias";
    return this.http.get<ICategoria[]>(urlEndPoint);
  }
}
