class TaskModel {
    constructor(data) {
        (this.title = data.title ? data.title : ''),
            (this.description = data.description ? data.description : ''),
            (this.empresa = data.empresa ? data.empresa : ''),
            (this.valor_Inicial = data.valor_Inicial ? Number(data.valor_Inicial) : 0),
            (this.valor_Final = data.valor_Final ? Number(data.valor_Final) : 0),
            (this.desconto = data.desconto ? Number(data.desconto) : 0),
            (this.previsao_fechamento = new Date(data.previsao_fechamento) ? new Date(data.previsao_fechamento) : null),
            (this.contato_numero = data.contato_numero ? data.contato_numero : ''),
            (this.contato_nome = data.contato_nome ? data.contato_nome : ''),
            (this.cpf = data.cpf ? data.cpf : ''),
            (this.processoId = Number(data.projetoId)),
            (this.motivosId = Number(data.motivosId) ? Number(data.motivosId) : null),
            (this.produtoId = Number(data.produtoId) ? Number(data.produtoId) : null),
            (this.usersId = Number(data.usersId) ? Number(data.usersId) : null),
            (this.status = String(data.status) ? String(data.status) : '');
    }
}

export default TaskModel;
