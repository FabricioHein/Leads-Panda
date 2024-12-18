import Api from '@/api/api';

class AgendaService extends Api {
    constructor(config, token, url) {
        super(config, token, url);
        this.url = url || '/api/agenda';
        this.config = config || {};
        this.token = token;
    }
    async atualizarAgenda() {
        return await this.update();
    }
    async deleteAgenda() {
        this.url = '/api/agenda/delete';
        return await this.post();
    }
    async getHorarios() {
        this.url = '/api/agenda/agendamento/horarios';
        const getHorarios = await this.post()
        return getHorarios.data;
    }
    async criarAgendamentoExterno() {
        this.url = '/api/agenda/agendamento/criarAgendamento';
        const getHorarios = await this.post()
        return getHorarios.data;
    }
    async getAllClienteAngendaUser() {
        this.url = '/api/agenda/agendamento/cliente';
        const getAllClienteAngendaUser = await this.post()
        return getAllClienteAngendaUser.data;
    }
    async criarAgenda() {
        const novaAgenda = await this.post()
        return novaAgenda.data;
    }

    async getAllAgenda() {
        const agendaUser = await this.get();
        if (agendaUser.data) return agendaUser.data;
        return [];
    }
}

export default AgendaService;
