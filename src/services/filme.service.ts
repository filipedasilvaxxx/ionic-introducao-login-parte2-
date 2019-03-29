import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Filme } from "../model/filme";

@Injectable()
export class FilmeService{

   
      
    constructor(private http : HttpClient ){

    }

    listaDeFilmes() : Observable<Filme[]>{
        return this.http.get<Filme[]>('http://www.mocky.io/v2/5c9bedca360000c128d96ea2'
        )

        
    }

}