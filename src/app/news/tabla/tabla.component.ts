import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Noticias, NoticiasDetalle } from '../interfaces/noticiasResp';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: []
})
export class TablaComponent implements OnInit {

  @Input() rows:NoticiasDetalle[]=[];
  @Output() onFila:EventEmitter<NoticiasDetalle>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  capturaFila(fila:any){
    this.onFila.emit(fila);
  }

}
