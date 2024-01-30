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
exports.ServicoService = void 0;
const common_1 = require("@nestjs/common");
const servicos_repository_1 = require("../repositories/servicos.repository");
const msg_response_1 = require("../utils/msg.response");
let ServicoService = class ServicoService {
    constructor(servicoRepository) {
        this.servicoRepository = servicoRepository;
    }
    async atualizarServico(data) {
        try {
            const { id } = data;
            const dataServico = data;
            return await this.servicoRepository.updateServico(Number(id), dataServico);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllServico() {
        try {
            return await this.servicoRepository.getServicoAll();
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createServico(data) {
        try {
            return await this.servicoRepository.createServico(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteServico(data) {
        try {
            const id = data.id;
            return await this.servicoRepository.deleteServico(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
ServicoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [servicos_repository_1.ServicoRepository])
], ServicoService);
exports.ServicoService = ServicoService;
//# sourceMappingURL=servicos.service.js.map