import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ArticuloListComponent } from './layouts/articulos/articulo-list/articulo-list.component';
import { DetallesComponent } from './layouts/detalles/detalles.component';

const routes: Routes = [
  {path: '',redirectTo:'tienda', pathMatch:'full'},
  {path: 'tienda', component: TiendaComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'tienda/articulos', component: ArticuloListComponent},
  {path: 'tienda/articulos/detalles/:idArticulo', component:DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
