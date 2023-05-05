import { Component, OnInit } from '@angular/core';
import { Tarjeta } from './tarjeta.model';
import { TarjetaService } from './tarjeta.service';
import { ITarjetas } from './tarjetas.interface';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  tarjetas: Tarjeta[] = []

  constructor(
    private tarjetaService: TarjetaService
  ){

  }

  ngOnInit(): void {
    this.obtenerCarouselRest();
  }
  private obtenerCarouselRest() {
    this.tarjetaService.obtenerTarjetasRest().subscribe(
      (data) => {
        data.forEach( (tarjeta) => {
          const tarjetaAIncluir: Tarjeta = new Tarjeta(tarjeta.titulo, tarjeta.subtitulo, tarjeta.imagen);
          this.tarjetas.push(tarjetaAIncluir);
        })
      }
    )
  }

}
