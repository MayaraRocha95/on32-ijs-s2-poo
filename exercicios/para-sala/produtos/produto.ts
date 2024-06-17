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
    protected estoque: number = 0;
    public estaDisponivel(): boolean {
        return this.estoque > 0;
    
    }
    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO;
    get descricao():string {
        return 'verde ' + this._descricao;
    }


constructor(public nome:string, public preco: number, protected _descricao: string){}
}



