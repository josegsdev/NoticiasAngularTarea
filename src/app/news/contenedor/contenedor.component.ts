import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NoticiasDetalle } from '../interfaces/noticiasResp';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styles: [``]
})
export class ContenedorComponent implements OnInit {
  public fila:NoticiasDetalle | null =null;

  
  constructor() { }

  ngOnInit(): void {
    
  }

  logea(e:any){
    this.fila=e;
    console.table(this.fila);
  }

  vuelve(e:boolean){
    this.fila=null;
  }
  
}
