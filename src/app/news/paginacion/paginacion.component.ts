import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styles: [`
  .not-active{color:black!important;}
  .active{color: orange!important;}
  a{ margin: 20px!important; cursor :pointer}
  span{color:#888; display:block; padding: 30px 15px}
  `]}
)
export class PaginacionComponent implements OnInit {

  private paginaActual:number=1;
  @Input() totalResultados:number=0;
  private resultadosPorPagina:number=10;
  private paginasN:number=Math.ceil(this.totalResultados / this.resultadosPorPagina);
  private linksGrupo:number[]=[];
  private numerosVisibles:number=5;
  private inicioN:number=0;
  private offset:number=0;

  @Output() onPaginacion: EventEmitter<number>=new EventEmitter();

  constructor(){

  }
  ngOnInit(): void {
    this.resultadosPorPagina=10;
    this.paginaActual=1;
    this.linksGrupo=[];
    this.numerosVisibles=5;
    this.inicioN=0;
    this.offset=0;
    this.paginasN=Math.ceil(this.totalResultados / this.resultadosPorPagina);
    this.construyeLinksNumeros();
  }

  get pagAct():number{
    return this.paginaActual;
  }
  get total():number{
    return this.totalResultados;
  }
  get numV():number{
    return this.numerosVisibles;
  }
  get iniN():number{
    return this.inicioN;
  }
  get ofst(){
    return this.offset;
  }
  get printLinks():number[]{
    return this.linksGrupo;
  }
  get nPag():number{
    return this.paginasN;
  }
  construyeLinksNumeros(){
    for(let i=0; i < this.paginasN ;i++){
      this.linksGrupo[i]=i;
    }
  }

  clickNumero(num:number){
    if(num <1 || num >this.paginasN){return;}
    switch (num) {
      case 1:
        this.inicioN=0;
        break;
      case this.paginasN:
        this.inicioN=Math.ceil((this.paginasN / this.numerosVisibles) -1);
        break;        
      case this.numerosVisibles * (this.inicioN + 1) :
        this.inicioN++;
        break;
      case (this.inicioN * this.numerosVisibles) :
        this.inicioN--;
      break;
      case this.numerosVisibles * (this.inicioN + 1) + 1  :
        this.inicioN++;
        break;
      case (this.inicioN * this.numerosVisibles) - 1 :
        this.inicioN--;
        break;      
    }
     this.offset=this.inicioN === 0 ? 0:1;
     if(this.paginaActual === num){return;}
     this.paginaActual = num;

     this.onPaginacion.emit(this.paginaActual);

    console.log(`
    ///////////////////////////////////////////////
    paginaActual: ${this.paginaActual}
    totalResultados: ${this.totalResultados}
    resultadosPorPagina: ${this.resultadosPorPagina}
    numerosVisibles: ${this.numerosVisibles}
    inicioN: ${this.inicioN}
    offset: ${this.offset}
    ----------desde: ${(this.inicioN * this.numerosVisibles) }----------
    ----------hasta: ${this.numerosVisibles * (this.inicioN + 1)}---------
    //////////////////////////////////////////////
    `);
  }

  cssActive(a:number):string{
  
    return (this.paginaActual === a ) ? 'active':'not-active';
  }

}