import { ProdutoTipoEnum } from "../enums/produto-tipo.enum";

export interface ProdutoInterface{
    descricao: string;
    preco: number;
    nome: string;
    cor: string;
    tipo: ProdutoTipoEnum;
    estoque: number;
    estaDisponivel: () => boolean; //ter estoque, status: publicado, draft, deletado

}