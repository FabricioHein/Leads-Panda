class FornecedoresModel{
    constructor(data){
        this.id = Number(data.id) || undefined,
        this.email = data.email,
        this.empresa = data.empresa,
        this.cnpj = data.cnpj,
        this.telefone = data.telefone,
        this.celular = data.celular,
        this.nome_responsavel = data.nome_responsavel   
    }
}

export default FornecedoresModel;