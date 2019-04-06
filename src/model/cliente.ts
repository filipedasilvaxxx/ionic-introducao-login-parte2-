export class Cliente{
    nome : string;
    telefone : string;
    email : string;

    // Dados do firebase
    setDados(obj : any){
        this.nome = obj.nome;
        this.telefone = obj.telefone;
        this.email = obj.email;
    }
}