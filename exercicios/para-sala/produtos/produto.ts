import { ProdutoTipoEnum } from "./enums/produto-tipo.enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";


//Verbosa
// export class Produto implements ProdutoInterface{
//     nome: string;
//     preco: number;
//     descricao: string;

//     constructor(nome: string, preco: number, descricao: string){
//         this.nome = nome;
//         this.preco = preco;
//         this.descricao= descricao;
//     }
// }


// public  ==> qualquer um pode acessar filho, u partir de uma variavel
//protected ==> só pode ser acessado por quem herda
//private ==> só pode ser acessado dentro da classe

//Abreviada
export class Produto implements ProdutoInterface{
    estoque: number = 10;
    public estaDisponivel(): boolean {
        return this.estoque > 0;
    
    }
    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO;
    get descricao():string {
        return 'verde ' + this._descricao;
    }
    // alterar preco

    get preco(): number {
        return 28;
    }
   
    

constructor(public nome:string, public _preco: number, protected _descricao: string, public  cor: string){}
   
}



