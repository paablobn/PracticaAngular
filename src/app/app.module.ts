import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { TarjetasComponent } from './layouts/tarjetas/tarjetas.component';
import { CategoriasComponent } from './layouts/categorias/categorias.component';
import { CarouselComponent } from './layouts/carousel/carousel.component';
import { ArticuloListComponent } from './layouts/articulos/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './layouts/articulos/articulo-form/articulo-form.component';
import { DetallesComponent } from './layouts/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    NosotrosComponent,
    NavbarComponent,
    CarouselComponent,
    TarjetasComponent,
    CategoriasComponent,
    CarouselComponent,
    ArticuloListComponent,
    ArticuloFormComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
