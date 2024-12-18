"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendaService = void 0;
const common_1 = require("@nestjs/common");
const agenda_repository_1 = require("../repositories/agenda.repository");
const msg_response_1 = require("../utils/msg.response");
const clientes_repository_1 = require("../repositories/clientes.repository");
const usuario_repository_1 = require("../repositories/usuario.repository");
let AgendaService = class AgendaService {
    constructor(agenda, clientesRepository, usuarioRepository) {
        this.agenda = agenda;
        this.clientesRepository = clientesRepository;
        this.usuarioRepository = usuarioRepository;
    }
    async atualizarAgenda(data) {
        try {
            const { id } = data;
            const dataAgenda = data;
            return await this.agenda.updateAgenda(Number(id), dataAgenda);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAgendaByDataUsuario(data) {
        try {
            const userAgendas = await this.agenda.getAgendaByDataUsuario(Number(data.atendimentoId), data.date);
            const existingTimes = userAgendas
                .map(agenda => {
                const date = new Date(agenda.start);
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                return `${hours}:${minutes}`;
            });
            return this.generateTimes(existingTimes);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAvailableTimes(date_day, empresa_configId, atendimentoId) {
    }
    generateTimes(existingTimes) {
        const times = [];
        const start = 8 * 60;
        const end = 18 * 60;
        for (let time = start; time <= end; time += 30) {
            const hours = Math.floor(time / 60);
            const minutes = time % 60;
            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            if (!existingTimes.includes(formattedTime)) {
                times.push(formattedTime);
            }
        }
        return times;
    }
    async getAllClienteAngendaUser(data) {
        try {
            let client = await this.clientesRepository.getByIdCPF(data.cpf_usuario, Number(data.clientId));
            let listUsuarioWorker = await this.usuarioRepository.getUsuariaClienteAgendamento(Number(data.clientId));
            if (!client && data.nome && data.cpf_usuario) {
                let newCliente = {
                    nome: data.nome,
                    telefone: data.telefone,
                    cpf: data.cpf_usuario,
                    empresa_configId: Number(data.clientId)
                };
                let cadastroCliente = await this.clientesRepository.createClientes(newCliente);
                return {
                    usuario: cadastroCliente,
                    works: listUsuarioWorker
                };
            }
            return {
                usuario: client,
                works: listUsuarioWorker
            };
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllAgendaAtendimentoUsuario(empresa_configId) {
        try {
            return await this.agenda.getAgendaAll(Number(empresa_configId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllAgenda(empresa_configId) {
        try {
            return await this.agenda.getAgendaAll(Number(empresa_configId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createAgenda(data) {
        try {
            return await this.agenda.createAgenda(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async crearAgendamentoExterno(data) {
        try {
            return await this.agenda.crearAgendamentoExterno(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteAgenda(data) {
        try {
            const id = data.id;
            return await this.agenda.deleteAgenda(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
AgendaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [agenda_repository_1.AgendaRepository,
        clientes_repository_1.ClientesRepository,
        usuario_repository_1.UsuarioRepository])
], AgendaService);
exports.AgendaService = AgendaService;
//# sourceMappingURL=agenda.service.js.map