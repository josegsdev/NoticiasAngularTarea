import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Noticias, NoticiasDetalle } from '../interfaces/noticiasResp';
import { SnoticiasService } from '../snoticias.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: []
})
export class ListadoComponent implements OnInit {
  private filtros:string='';
  public query:string='';
  private paginacion:number=1;
  public np:number=0;

  private resultados:Noticias={
    status:       '',
    totalResults: 0,
    results:      [],
    nextPage:     0
  }; 

  private totalResp:number=11;  

  @Output() onFilas:EventEmitter<NoticiasDetalle>=new EventEmitter()

  constructor(private serv:SnoticiasService){}
  ngOnInit(): void {
    
    this.buscar();
  }
  get totalRespN():number{
    return this.totalResp;
  } 

  get printResultados(){
    console.log(this.resultados);
    return this.resultados;
  }

  parametroBuscar(e:string){
    this.query=e.length > 0 ? `&q=${e}`:'';
    this.buscar();
  }

  parametrosFiltros(e:string){
    this.filtros=e;
    this.buscar();
  }

  parametroPaginacion(e:number){
    this.paginacion=e;

    console.log(`#######${e}#######`);
  }

  fila(ev:any){
    //console.log("fila en listado:"+ev);
    this.onFilas.emit(ev);
  }  

  buscar(){
    this.serv.buscar(this.filtros+this.query).subscribe(
      {
        next:(resp)=>{
         // this.resultados=resp.results;
         
         this.resultados=resp;
         this.totalResp=this.resultados.totalResults;
         
         // console.table(resp.results);
        },
        error:(err)=>{
          this.resultados={
            status:       '',
            totalResults: 0,
            results:      [],
            nextPage:     0
          };
        }
      }
    )
  }

}
