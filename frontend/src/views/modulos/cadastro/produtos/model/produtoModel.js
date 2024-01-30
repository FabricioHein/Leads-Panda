 class ProdutoModel{
    constructor(data){
        this.id = Number(data.id) || undefined,
        this.nome = data.nome,
        this.codigo = data.codigo,
        this.qtd_estoque = Number(data.qtd_estoque) ? Number(data.qtd_estoque) : 0 ,
        this.preco_venda = Number(data.preco_venda) ?  Number(data.preco_venda) : 0,
        this.descricao = data.descricao ? data.descricao : '',
        this.link_img = data.link_img  ? data.link_img  : ''
       
    }
}

export default ProdutoModel;