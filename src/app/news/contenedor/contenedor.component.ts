import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: []
})
export class ContenedorComponent implements OnInit {
  public fila:any;
  constructor() { }

  ngOnInit(): void {
  }
  logea(e:any){
    this.fila=e;
   console.table(this.fila);
  }
}
