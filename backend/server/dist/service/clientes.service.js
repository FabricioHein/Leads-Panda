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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const clientes_repository_1 = require("../repositories/clientes.repository");
const historico_cliente_repository_1 = require("../repositories/historico-cliente.repository");
const msg_response_1 = require("../utils/msg.response");
let ClientesService = class ClientesService {
    constructor(clientesRepository, historicoClienteRepository) {
        this.clientesRepository = clientesRepository;
        this.historicoClienteRepository = historicoClienteRepository;
    }
    async getByIdName(name) {
        return await this.clientesRepository.getByIdName(name);
    }
    async createClienteConfig(data) {
        const usuario = await this.createClientes(data);
        if (usuario) {
        }
        return '';
    }
    async atualizarClientes(data) {
        try {
            const { id } = data;
            const dataClientes = data;
            return await this.clientesRepository.updateClientes(Number(id), dataClientes);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllClientes(clienteId) {
        try {
            return await this.clientesRepository.getClientesAll(Number(clienteId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createHistoricoClientes(data) {
        try {
            return await this.historicoClienteRepository.createHistoricoCliente(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createClientes(data) {
        try {
            return await this.clientesRepository.createClientes(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteClientes(data) {
        try {
            const id = data.id;
            return await this.clientesRepository.deleteClientes(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [clientes_repository_1.ClientesRepository,
        historico_cliente_repository_1.HistoricoClienteRepository])
], ClientesService);
exports.ClientesService = ClientesService;
//# sourceMappingURL=clientes.service.js.map