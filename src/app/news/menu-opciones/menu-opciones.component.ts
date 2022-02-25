import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { parametrosFiltro } from '../interfaces/parametrosFiltro';


@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: []
})
export class MenuOpcionesComponent implements OnInit {
  @Output() onParametros:EventEmitter<string>=new EventEmitter();

  private parametros:parametrosFiltro={
    country:'',
    language:[],
    category:[]
  }
  public optSelect:boolean=false;
  public paises=[
    {
      nombre: 'Australia',
      valor:'au'
    },
    {
      nombre: 'Brazil',
      valor:'br'
    },    
    {
      nombre: 'Germany',
      valor:'de'
    },
    {
      nombre: 'United states of america',
      valor:'us'
    },    
    {
      nombre: 'Spain',
      valor:'es'
    },    
    {
      nombre: 'New zealand',
      valor:'nz'
    }
  ];
  public lenguajes=[
  {
    id:'leng01',
    valor:'es',
    label:'Spanish',
    chequeado:false
  },
  {
    id:'leng02',
    valor:'en',
    label:'English',
    chequeado:false
  },
  {
    id:'leng03',
    valor:'fr',
    label:'French',
    chequeado:false
  },
  {
    id:'leng04',
    valor:'de',
    label:'German',
    chequeado:false
  }
];
  
public categorias=[
{
  id:'cat01',
  valor:'business',
  label:'business',
  chequeado:false
},
{
  id:'cat02',
  valor:'entertainment',
  label:'entertainment',
  chequeado:false
},
{
  id:'cat03',
  valor:'environment',
  label:'environment',
  chequeado:false
},
{
  id:'cat04',
  valor:'food',
  label:'food',
  chequeado:false
}
,
{
  id:'cat05',
  valor:'health',
  label:'health',
  chequeado:false
}
,
{
  id:'cat06',
  valor:'politics',
  label:'politics',
  chequeado:false
}
,
{
  id:'cat07',
  valor:'science',
  label:'science',
  chequeado:false
}
,
{
  id:'cat08',
  valor:'sports',
  label:'sports',
  chequeado:false
}
,
{
  id:'cat09',
  valor:'technology',
  label:'technology',
  chequeado:false
}
,
{
  id:'cat10',
  valor:'top',
  label:'top',
  chequeado:false
}
,
{
  id:'cat11',
  valor:'world',
  label:'world',
  chequeado:false
}
];
  constructor(){}
  ngOnInit():void{}

  cambioSelect(){
    this.parametros.country=this.optSelect;
    console.log(this.optSelect);
    this.parametrosString(); 
  }

  cambioCheckLeng(){
    this.parametros.language=[];
    this.lenguajes.forEach((cb)=>{
     if(cb.chequeado){
        this.parametros.language.push(cb.valor)   
      }
    });
    this.parametrosString(); 
  }

  cambioCheckCat(){
    this.parametros.category=[];
    this.categorias.forEach((cb)=>{
     if(cb.chequeado){
        this.parametros.category.push(cb.valor);    
      }
    });
    this.parametrosString();  
  }

  parametrosString(){
    let str:string='';
    str+=this.parametros.category.length > 0 ? `&category=${this.parametros.category.toString()}`:'';
    str+=this.parametros.language.length > 0 ? `&language=${this.parametros.language.toString()}`:'';
    str+=this.parametros.country != false ? `&country=${this.parametros.country.toString()}`:'';    
    this.onParametros.emit(str); 
  }

}
