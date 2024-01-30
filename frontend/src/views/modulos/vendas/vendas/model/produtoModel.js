 class ProdutoModel{
    constructor(data){
        this.id = Number(data.id) || undefined,
        this.nome = data.nome,
        this.codigo = data.codigo,
        this.qtd_estoque = Number(data.qtd_estoque),
        this.qtd_estoque_real = Number(data.qtd_estoque_real)
        this.preco_venda = Number(data.preco_venda)        
        this.preco_venda_min = Number(data.preco_venda_min)
        this.preco_venda_max = Number(data.preco_venda_max)
    }
}

export default ProdutoModel;