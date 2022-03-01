import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticias, NoticiasDetalle } from './interfaces/noticiasResp';

@Injectable({
  providedIn: 'root'
})
export class SnoticiasService {

  constructor(private http:HttpClient) {}
  private baseURL:string='https://newsdata.io/api/1/news';
  //private apikey:string='?apikey=pub_4874ab5fcdc10a6ae3b5cffbfd4d58983cc0';//jldcgs
  //private apikey:string='?apikey=pub_505440e0128239d6ff6f81739d5264639e84'//josegsdev
  private apikey:string='?apikey=pub_5060c7299b985d65e4f48e88fbdae69fd7f1'//esoj
  
  buscar(params:string):Observable<Noticias>{ 
    let full = this.baseURL+this.apikey+params;
    console.log(`
    -----------------
    ${full}
    ------------
    `);
   
    return this.http.get<Noticias>(full);
  }
}
