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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendaController = void 0;
const common_1 = require("@nestjs/common");
const agenda_service_1 = require("../service/agenda.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AgendaController = class AgendaController {
    constructor(agendaService) {
        this.agendaService = agendaService;
    }
    async getAgendaByDataUsuario(req) {
        try {
            return await this.agendaService.getAllClienteAngendaUser(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async crearAgendamentoExterno(req) {
        try {
            return await this.agendaService.crearAgendamentoExterno(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async getAllClienteAngendaUser(req) {
        try {
            return await this.agendaService.getAgendaByDataUsuario(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async getAllagenda(id) {
        try {
            return await this.agendaService.getAllAgenda(id);
        }
        catch (error) {
            return error;
        }
    }
    async getAllagendaById(id) {
        try {
            return await this.agendaService.getAllAgenda(id);
        }
        catch (error) {
            return error;
        }
    }
    async deleteagenda(req) {
        try {
            return await this.agendaService.deleteAgenda(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createagenda(req) {
        try {
            return await this.agendaService.createAgenda(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarAgenda(req) {
        try {
            return await this.agendaService.atualizarAgenda(req.body);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.Post)('agendamento/cliente'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "getAgendaByDataUsuario", null);
__decorate([
    (0, common_1.Post)('agendamento/criarAgendamento'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "crearAgendamentoExterno", null);
__decorate([
    (0, common_1.Post)('agendamento/horarios'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "getAllClienteAngendaUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/:empresa_configId'),
    __param(0, (0, common_1.Param)('empresa_configId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "getAllagenda", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "getAllagendaById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "deleteagenda", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "createagenda", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendaController.prototype, "atualizarAgenda", null);
AgendaController = __decorate([
    (0, common_1.Controller)('api/agenda'),
    __metadata("design:paramtypes", [agenda_service_1.AgendaService])
], AgendaController);
exports.AgendaController = AgendaController;
//# sourceMappingURL=agenda.controller.js.map