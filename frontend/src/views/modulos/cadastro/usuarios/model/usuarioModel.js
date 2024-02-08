class UsuarioModel {
    constructor(data) {
        (this.id = Number(data.id) || undefined),
            (this.nome = data.nome ? String(data.nome) : ''),
            (this.sobrenome = data.sobrenome ? String(data.sobrenome) : ''),
            (this.email = data.email ? String(data.email) : ''),
            (this.cpf = data.cpf ? String(data.cpf) : ''),           
            (this.telefone = data.telefone ? String(data.telefone) : ''),
            (this.linkFoto = data.linkFoto ? String(data.linkFoto) : ''),
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

export default UsuarioModel;

