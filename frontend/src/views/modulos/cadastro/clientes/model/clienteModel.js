class ClienteModel {
    constructor(data) {
        (this.id = Number(data.id) || undefined),
            (this.nome = data.nome ? String(data.nome) : ''),
            (this.sobrenome = data.sobrenome ? String(data.sobrenome) : ''),
            (this.email = data.email ? String(data.email) : ''),
            (this.empresa = data.empresa ? String(data.empresa) : ''),
            (this.cpf = data.cpf ? String(data.cpf) : ''),
            (this.rg = data.rg ? String(data.rg) : ''),
            (this.data_nascimento = data.data_nascimento ?  new Date(data.data_nascimento) : null),
            (this.cnpj = data.cnpj ? String(data.cnpj) : ''),
            (this.telefone = data.telefone ? String(data.telefone) : ''),
            (this.linkFoto = data.linkFoto ? String(data.linkFoto) : ''),
            (this.historico_cliente = data.historico_cliente || []),
            //endereco
            (this.logradouro = data.logradouro ? data.logradouro : ''),
            (this.cep = data.cep ? data.cep : ''),
            (this.bairro = data.bairro ? data.bairro : ''),
            (this.estado = data.estado ? data.estado : ''),
            (this.cidade = data.cidade ? data.cidade : ''),
            (this.pais = data.pais ? data.pais : ''),
            (this.complemento = data.complemento ? data.complemento : ''),
            (this.numero = data.numero ? data.numero : '');
    }
}

export default ClienteModel;
