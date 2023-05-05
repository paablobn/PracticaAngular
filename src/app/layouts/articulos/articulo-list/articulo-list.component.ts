import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articulo } from './articulo.model';
import { ArticuloService } from './articulo.service';
import { Detalle } from '../../detalles/detalles.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit {
  articulos: Articulo[] = [];

  constructor(
    private articuloService: ArticuloService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.obtenerArticulos();
  }

  verInfoArticulo(idArticulo: number){
    this.router.navigate(['tienda/articulos/detalles/',idArticulo])
  }

  private obtenerArticulos() {
    this.articuloService.obtenerArticulos().subscribe(
      (data) => {
        data.forEach((articulo) => {
          const articuloIncluir: Articulo = new Articulo(articulo.id,articulo.nombre, articulo.imagen, articulo.precio, articulo.descuento, articulo.favorito);
          this.articulos.push(articuloIncluir);
        })
      }
    )
  }
}
