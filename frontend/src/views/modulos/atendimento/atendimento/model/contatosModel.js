class ContatosModel {
    constructor(data) {
        this.id = Number(data.id) || undefined;
        (this.name = String(data.name)), (this.email = String(data.email)),
         (this.number = String(data.number)?  String(data.number) : '');
        (this.profilePicUrl = String(data.profilePicUrl) ? String(data.profilePicUrl) : ''),
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

export default ContatosModel;
