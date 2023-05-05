import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService
  ){

  }


  ngOnInit(): void {
    this.obtenerCategorias();
  }
  private obtenerCategorias() {
    this.categoriaService.obtenerCategorias().subscribe(
      (data) => {
        data.forEach((categoria) => {
          const categoriaIncluir: Categoria = new Categoria(categoria.nombre, categoria.imagen);
          this.categorias.push(categoriaIncluir);
        })
      }
    )
  }
}
