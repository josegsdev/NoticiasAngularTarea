import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: []
})
export class ContenedorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logea(e:any){
    console.table(e);
  }
}
