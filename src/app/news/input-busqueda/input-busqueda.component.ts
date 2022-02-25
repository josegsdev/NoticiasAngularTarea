import { Component, EventEmitter, Output,OnInit, Input} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrls: []
})
export class InputBusquedaComponent implements OnInit {
  @Input() printPlaceHolder:string='';
  @Output() onEnter:EventEmitter<string>= new EventEmitter();
  @Output() onDeBounce:EventEmitter<string>=new EventEmitter();
  debouncer: Subject<string>= new Subject();

  public termino:string='';

 // constructor(){}

  ngOnInit(): void {
      this.debouncer
      .pipe(debounceTime(1000))
      .subscribe(valor =>{
        this.onDeBounce.emit(this.termino);
        console.log("debouncer: "+this.termino);
      })
  }

  buscarInput(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(ev:any){
    this.debouncer.next(this.termino);
  }
}
