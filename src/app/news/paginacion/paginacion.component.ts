import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styles: []
})
export class PaginacionComponent implements OnInit {

  private paginaActual:number=1;
  private totalResultados:number=71;
  private resultadosPorPagina:number=10;
  public links:number=Math.ceil(this.totalResultados / this.resultadosPorPagina);
  public linksGrupo:number[][]=[];

  private numerosVisibles:number=5;
  public setDeNumeros:number=0;
  
  constructor(){}
  ngOnInit(): void {
    this.construyeLinksNumeros();
  }



  construyeLinksNumeros(){
    let ff=0;
    let ar:number[]=[];
    for(let i=0; i < this.links ;i++){
      if(i%this.numerosVisibles == 0 && i > 0 ){
        this.linksGrupo[ff]=ar;   
        ar=[];
        ff++;
      }
      ar.push(i+1);
    }
    this.linksGrupo[ff]=ar;
    console.table(this.linksGrupo);
  }


  clickNumero(num:number){
    if(this.paginaActual === num){return;}
    this.paginaActual = num;

    switch (this.paginaActual ) {
      case this.linksGrupo[this.setDeNumeros][0]:
        if(this.setDeNumeros > 0){this.setDeNumeros--;}
        this.construyeLinksNumeros();
          console.log('es igual al menor');
        break;
      case (this.linksGrupo[this.setDeNumeros][this.numerosVisibles-1]):
        this.setDeNumeros++;
        this.construyeLinksNumeros();
          console.log('es igual al mayor');
        break;
    }

    console.log(`
    ///////////////////////////////////////////////
    paginaActual: ${this.paginaActual}
    totalResultados: ${this.totalResultados}
    resultadosPorPagina: ${this.resultadosPorPagina}
    numerosVisibles: ${this.numerosVisibles}
    setDeNumeros: ${this.setDeNumeros}
    //////////////////////////////////////////////
    `);
  }

}
