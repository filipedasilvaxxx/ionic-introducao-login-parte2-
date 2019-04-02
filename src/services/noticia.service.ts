import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Noticia } from "../model/noticia";

@Injectable()
export class NoticiaService{

   
      
    constructor(private http : HttpClient ){

    }

    listaDeNoticias() : Observable<Noticia[]>{
        return this.http.get<Noticia[]>('http://www.mocky.io/v2/5ca284633300009800d34040'
        )

        
    }

}