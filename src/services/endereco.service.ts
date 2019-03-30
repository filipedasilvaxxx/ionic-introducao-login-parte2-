import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Endereco } from "../model/endereco";

@Injectable()
export class EnderecoService{

   
      
    constructor(private http : HttpClient ){

    }

    buscaCep(cep : string) : Observable<Endereco>{
        return this.http.get<Endereco>(`viacep.com.br/ws/${cep}/json/`
        )

        
    }

}