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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("../service/usuarios.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let UsuariosController = class UsuariosController {
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    async criarNovoCliente(req) {
        try {
            return await this.usuariosService.createUsuarioCliente(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async getAllUsuario(empresa_configId) {
        try {
            return await this.usuariosService.getAllUsuario(empresa_configId);
        }
        catch (error) {
            return error;
        }
    }
    async novaSenhaUsuarioEmail(email) {
        try {
            return await this.usuariosService.novaSenhaUsuarioEmail(email);
        }
        catch (error) {
            return error;
        }
    }
    async deleteUsuario(req) {
        try {
            return await this.usuariosService.deleteUsuario(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async salvarFotoPerfil(req) {
        try {
            return await this.usuariosService.salvarFotoPerfil(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarPermissaoModulos(req) {
        try {
            return await this.usuariosService.atualizarPermissoesModulos(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createUsuario(req) {
        try {
            return await this.usuariosService.createUsuario(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarUsuario(req) {
        try {
            return await this.usuariosService.atualizarUsuario(req.body);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('criar-usuario-cliente'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "criarNovoCliente", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/:empresa_configId'),
    __param(0, (0, common_1.Param)('empresa_configId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "getAllUsuario", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('novasenha/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "novaSenhaUsuarioEmail", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "deleteUsuario", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('foto/perfil'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "salvarFotoPerfil", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('atualizar/permissao'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "atualizarPermissaoModulos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "createUsuario", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "atualizarUsuario", null);
UsuariosController = __decorate([
    (0, common_1.Controller)('api/usuario'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
exports.UsuariosController = UsuariosController;
//# sourceMappingURL=usuarios.controller.js.map