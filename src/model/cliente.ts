export class Cliente{
    id : string;
    nome : string;
    telefone : string;
    email : string;
    img : string;

    // Dados do firebase
    setDados(obj : any){
        this.nome = obj.nome;
        this.telefone = obj.telefone;
        this.email = obj.email;
    }
}