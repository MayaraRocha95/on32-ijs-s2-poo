import { Produto } from "./produto";

export class ProdutoVariante extends Produto {
  public imagens: string[] = [];
  public categorias: string[] = ['cropped'];
  dimensoes: any = {};
  
  constructor(
    public nome: string,
    public preco: number,
    protected _descricao: string,
    public cor: string) 
    {

    super(nome, preco, _descricao)
  }
  get descricao(): string {
    return `O produto: ${this.nome} e tem a cor ${this.cor} com as categorias ${this.categorias.join(', ')} e ${this._descricao}`
  }
}

