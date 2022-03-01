import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './news/detalle/detalle.component';
import { ListadoComponent } from './news/listado/listado.component';



//LAS RUTAS NO SE UTILIZARON YA QUE EL DETALLE NO SE CONSULTA A UNA API
const rutas: Routes=[
  {
    path:'',
    component:ListadoComponent,
    pathMatch: 'full'
  },
  {
    path:'noticia/:nid',
    component:DetalleComponent
  },
  {
    path:'**',
    redirectTo:''
  }
]



@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
