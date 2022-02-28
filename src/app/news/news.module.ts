import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { ListadoComponent } from './listado/listado.component';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';
import { TablaComponent } from './tabla/tabla.component';
import { FormsModule } from '@angular/forms';
import { InputBusquedaComponent } from './input-busqueda/input-busqueda.component';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from '../app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { PaginacionComponent } from './paginacion/paginacion.component';



@NgModule({
  declarations: [
    DetalleComponent,
    ListadoComponent,
    MenuOpcionesComponent,
    TablaComponent,
    InputBusquedaComponent,
    ContenedorComponent,
    PaginacionComponent
  ],
  exports:[
    DetalleComponent,
    ListadoComponent,
    MenuOpcionesComponent,
    TablaComponent,
    InputBusquedaComponent,
    ContenedorComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class NewsModule { }
