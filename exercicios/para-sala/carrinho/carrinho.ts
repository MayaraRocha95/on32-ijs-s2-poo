import { carrinhoProdutoInterface } from "../interfaces/carrinho-produto"
import { ProdutoTipoEnum } from "../produtos/enums/produto-tipo.enum"
import { ProdutoInterface } from "../produtos/interfaces/produtos.interface"
import { Produto } from "../produtos/produto"

export class Carrinho {
    //quantidade de produtos


    //valor total
    private carrinhoProdutos: Map <string, carrinhoProdutoInterface> = new Map();
    display(): void {
        console.table(this.carrinhoProdutos)
    }

    private validacao(produto: ProdutoInterface, quantidade: number ): boolean {
        if (!produto.estaDisponivel()) {
            console.error(`Produto  ${produto.nome} não disponível`)
            return false;
        }
        if (quantidade <= 0) {
            console.error(`Quantidade inválida`)
            return false;
        }
        if (produto.tipo === ProdutoTipoEnum.FISICO) {
            if (produto.estoque < quantidade) {
                console.error(`Quantidade ultrapassa a quantidade disponível`)
                return false;
            }
        }
        return true;
    }


    adicionarItem(produto: ProdutoInterface, quantidade: number = 1) {
        // if (!produto.estaDisponivel()) {
        //     console.error(`Produto  ${produto.nome} não disponível`)
        //     return;
        // }
        // if (quantidade <= 0) {
        //     console.error(`Quantidade inválida`)
        //     return;
        // }
        // if (produto.tipo === ProdutoTipoEnum.FISICO) {
        //     if (produto.estoque < quantidade) {
        //         console.error(`Quantidade ultrapassa a quantidade disponível`)
        //         return;
        //     }
            
        // }
        if (!this.validacao(produto, quantidade)) {
            return;
        }

        produto.estoque = produto.estoque - Number(quantidade);

        const produtoCarrinho: carrinhoProdutoInterface = {
            nome: produto.nome,
            preco: produto.preco,
            quantidade,
            tipo: produto.tipo,
            cor: produto.cor,
            descricao: produto.descricao,
           
        }

        this.carrinhoProdutos.set(produto.nome, produtoCarrinho)
    }
    removerItem(nomeProduto: string, quantidade: number = 1): void {
        const produto = this.carrinhoProdutos.get(nomeProduto);
        if (!produto) {
            console.error(`Produto ${nomeProduto} não encontrado`)
            return;
        }
        if (quantidade <= 0) {
            console.error(`Quantidade inválida`)
            return;
        }
        if (quantidade > produto.quantidade) {
            console.error(`Quantidade ultrapassa a quantidade disponível`)
            return;
        }
        produto.quantidade = produto.quantidade - quantidade;
        if (produto.quantidade === 0) {
            this.carrinhoProdutos.delete(nomeProduto);
        }
    }
}








//pagar valor total