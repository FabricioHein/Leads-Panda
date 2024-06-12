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
let AgendaService = class AgendaService {
    constructor(agenda) {
        this.agenda = agenda;
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
    async getAllAgenda(id) {
        try {
            return await this.agenda.getAgendaAll(Number(id));
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
    __metadata("design:paramtypes", [agenda_repository_1.AgendaRepository])
], AgendaService);
exports.AgendaService = AgendaService;
//# sourceMappingURL=agenda.service.js.map