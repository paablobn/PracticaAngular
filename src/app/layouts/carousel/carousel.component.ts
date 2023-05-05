import { Component, OnInit } from '@angular/core';
import { Carousel } from './carousel.model';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouseles: Carousel[] = [];

  constructor(
    private carouselService: CarouselService
  ){

  }


  ngOnInit(): void {
    this.obtenerCarousel();
  }
  private obtenerCarousel() {
    this.carouselService.obtenerCarousel().subscribe(
      (data) => {
        data.forEach((carousel) => {
          const carouselIncluir: Carousel = new Carousel(carousel.imagen);
          this.carouseles.push(carouselIncluir);
        });
        console.log(this.carouseles);
      }
    )
  }
}
