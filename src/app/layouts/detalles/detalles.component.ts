import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Detalle } from './detalles.model';
import { ActivatedRoute } from '@angular/router';
import { InfoArticuloService } from './info-articulo.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit{
  detalle!: Detalle
  tallas: boolean[] =[]
  constructor(
    private route: ActivatedRoute,
    private detalleService: InfoArticuloService
  ){

  }

  ngOnInit(): void {
    this.obtenerDetalles(this.route.snapshot.paramMap.get('idArticulo')!);
  }

  
  obtenerDetalles(id: string) {
    this.detalleService.obtenerDetalles(id).subscribe(
      (detalle) => {
        this.detalle = new Detalle(detalle.id, detalle.imagen, detalle.titulo, detalle.precio, detalle.tallas);

        this.tallas = detalle.tallas
      }
    )
  }
}
