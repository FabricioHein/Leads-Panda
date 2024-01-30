 class ProdutoModel{
    constructor(data){
        this.id = Number(data.id) || undefined,
        this.codigo = data.codigo,
        this.descricao = data.descricao, 
        this.nome = data.nome     
    }
}

export default ProdutoModel;