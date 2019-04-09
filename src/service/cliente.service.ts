import { Cliente } from "../model/cliente";
import firebase from "firebase";
import { Injectable } from "@angular/core";

@Injectable()
export class ClienteService{
    firestore = firebase.firestore();
    settings = {timestampsInSnapshots: true};

    constructor(){
    
          this.firestore.settings(this.settings);//<--
      }
    

    getList() : Cliente[] {
        let listaDeClientes : Cliente[] = [];

        var ref = this.firestore.collection("cliente");
    
        ref.get().then(query => { // Tenta realizar uma consulta
            // "query -> armazena os dados de retorno "
          query.forEach(doc =>{ // forEac -> percorrer os dados de quey
                // "doc" -> Armagena um objeto de "query"
            let c = new Cliente(); // criando um objeto
            c.setDados(doc.data());// pega o obj firebase (any) e transforma para obj Clientes
            c.id = doc.id;
            listaDeClientes.push(c);// pego o obj Cliente e adiciono na lista
            console.log(listaDeClientes);
          });
        });
        return listaDeClientes;
      }
}