import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoticiasDetalle } from '../interfaces/noticiasResp';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: []
})
export class DetalleComponent implements OnInit {

  @Output() onVolverAtras:EventEmitter<boolean>=new EventEmitter();

  @Input() fila:NoticiasDetalle | null ={
    title:             '',
    link:              '',
    keywords:          null,
    creator:           null,
    video_url:         null,
    description:       null,
    content:           null,
    pubDate:           null,
    full_description:  '',
    image_url:         null,
    source_id:         ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  volver(){
    this.onVolverAtras.emit(true);
  }
}
