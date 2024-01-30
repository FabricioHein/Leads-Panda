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
exports.ClientesController = void 0;
const common_1 = require("@nestjs/common");
const clientes_service_1 = require("../service/clientes.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ClientesController = class ClientesController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    async getAllClientes(clienteId) {
        try {
            return await this.clienteService.getAllClientes(clienteId);
        }
        catch (error) {
            return error;
        }
    }
    async deleteClientes(req) {
        try {
            return await this.clienteService.deleteClientes(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createClientes(req) {
        try {
            return await this.clienteService.createClientes(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createHistoricoClientes(req) {
        try {
            return await this.clienteService.createHistoricoClientes(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarClientes(req) {
        try {
            return await this.clienteService.atualizarClientes(req.body);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/:clienteId'),
    __param(0, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "getAllClientes", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "deleteClientes", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "createClientes", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('historico'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "createHistoricoClientes", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "atualizarClientes", null);
ClientesController = __decorate([
    (0, common_1.Controller)('api/clientes'),
    __metadata("design:paramtypes", [clientes_service_1.ClientesService])
], ClientesController);
exports.ClientesController = ClientesController;
//# sourceMappingURL=clientes.controller.js.map