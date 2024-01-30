class ClienteModel {
    constructor(data) {
        (this.id = Number(data.id) || undefined),
            (this.nome = String(data.nome)),
            (this.sobrenome = String(data.sobrenome)),
            (this.email = String(data.email)),
            (this.empresa = String(data.empresa)),
            (this.cpf = String(data.cpf)),
            (this.telefone = String(data.telefone)),
            (this.linkFoto = String(data.linkFoto));
            (this.historico_cliente = data.historico_cliente || [])
            
    }
}

export default ClienteModel;
