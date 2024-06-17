import { ProdutoTipoEnum } from "./produtos/enums/produto-tipo.enum"
import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { Produto } from "./produtos/produto"
import { ProdutoDigital } from "./produtos/produto-digital"
import { ProdutoVariante } from "./produtos/produto-variante"

console.log("rodando")

//interface sem comportamento
// const produtoObj: ProdutoInterface = { //Objeto Literal JavaScript
// nome: "produto",
// preco: 2,
// descricao: "",
// tipo: ProdutoTipoEnum.DIGITAL
// }
const produtoDigital = new ProdutoDigital("Codigo Limpo" , 98.88, "Abordando as complexidades de um software", 'amarelo')
const produto = new Produto("Regata", 100, "teste", 'roxo')

const ReagataRosa = new ProdutoVariante("Regata", 25, "Modelo verão", "Rosa")


const display = (...produtos: ProdutoInterface[]): void => {
    const carrinhoProdutos = produtos.map((produto) => {
      return {
        nome: produto.nome,
        preco: produto.preco,
        cor: produto.cor,
        descricao: produto.descricao,
        estaDisponivel: produto.estaDisponivel() ? 'Disponivel' : 'Não Disponivel',

      }
    })
    console.table(carrinhoProdutos)
    
  }

display(produto,produtoDigital,ReagataRosa)
