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
exports.ContatosController = void 0;
const common_1 = require("@nestjs/common");
const contatos_service_1 = require("../service/contatos.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ContatosController = class ContatosController {
    constructor(contatoService) {
        this.contatoService = contatoService;
    }
    async getByIdContatosChat(id, req) {
        try {
            return await this.contatoService.getByIdContatosChat(id);
        }
        catch (error) {
            return error;
        }
    }
    async getByIdNumber(number, req) {
        try {
            return await this.contatoService.getByIdNumber(number);
        }
        catch (error) {
            return error;
        }
    }
    async getByIdName(name, req) {
        try {
            return await this.contatoService.getByIdName(name);
        }
        catch (error) {
            return error;
        }
    }
    async getAllContatos(empresa_configId) {
        try {
            return await this.contatoService.getAllContatos(empresa_configId);
        }
        catch (error) {
            return error;
        }
    }
    async deleteContatos(req) {
        try {
            return await this.contatoService.deleteContatos(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createContatos(req) {
        try {
            return await this.contatoService.createContatos(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarContatos(req) {
        try {
            return await this.contatoService.atualizarContatos(req.body);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getByIdContatosChat/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContatosController.prototype, "getByIdContatosChat", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('filter/number/:number'),
    __param(0, (0, common_1.Param)('number')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContatosController.prototype, "getByIdNumber", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('filter/name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContatosController.prototype, "getByIdName", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/:empresa_configId'),
    __param(0, (0, common_1.Param)('empresa_configId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContatosController.prototype, "getAllContatos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContatosController.prototype, "deleteContatos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContatosController.prototype, "createContatos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContatosController.prototype, "atualizarContatos", null);
ContatosController = __decorate([
    (0, common_1.Controller)('api/contatos'),
    __metadata("design:paramtypes", [contatos_service_1.ContatosService])
], ContatosController);
exports.ContatosController = ContatosController;
//# sourceMappingURL=contatos.controllers.js.map