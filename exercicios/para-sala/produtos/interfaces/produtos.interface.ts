import { ProdutoTipoEnum } from "../enums/produto-tipo.enum";

export interface ProdutoInterface{
    descricao: string;
    preco: number;
    nome: string;
    cor: string;
    tipo: ProdutoTipoEnum;
    estaDisponivel: () => boolean; //ter estoque, status: publicado, draft, deletado

}