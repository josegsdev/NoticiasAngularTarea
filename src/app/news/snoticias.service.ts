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
  private apikey:string='?apikey=pub_4874ab5fcdc10a6ae3b5cffbfd4d58983cc0';

  buscar(params:string):Observable<Noticias>{
    let full = this.baseURL+this.apikey+params;
    return this.http.get<Noticias>(full);
  }
}
